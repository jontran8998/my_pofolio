
import { Errors } from '../errors';
import * as request from "request";
import { Constants } from '../../../constants';
import * as express from 'express';
import { Dto } from '../dto';
import { Template } from './template';

const EMAIL_TIMEOUT = 60 //minutes
var blackList: { [key: string]: Date } = {}

export const verifyReCaptcha = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const postData: Dto.Email = req.body;
    const url = `https://www.google.com/recaptcha/api/siteverify?secret=${Constants.Env.CAPTCHA_SECRET_KEY}&response=${postData.recaptcha}&remoteip=${req.connection.remoteAddress}`

    request.post(url, function (err, response, body) {
        let data = JSON.parse(body);
        if (data.success !== undefined && !data.success) {
            return next(new Errors.InvalidCapcha())
        }
        else {
            next()
        }
    })
}

export const sendConfirmation = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const postData: Dto.Email = req.body;

    Template.sendConfirmation(
        {
            Email: postData.email,
            Name: postData.name
        },
        postData.message,
        req.headers.host
    )
        .then(data => {
            next()
        })
        .catch(error => {
            return next(new Errors.InternalEmailService())
        })
}

export const isInBlackList = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const postData: Dto.Email = req.body;
    if (blackList.hasOwnProperty(postData.email)) {
        let diff = Math.round((new Date().getTime() - blackList[postData.email].getTime()) / 60000)

        Object.keys(blackList).forEach(key => {
            if (Math.round((new Date().getTime() - blackList[key].getTime()) / 60000) > EMAIL_TIMEOUT) {
                console.log('deleted ' + postData.email)
                delete blackList[postData.email]
            }
        })

        if (diff < EMAIL_TIMEOUT) {
            return next(new Errors.OnlyOneMessage(diff, EMAIL_TIMEOUT - diff))
        }
    }
    next()
}

export const cleanUp = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    Object.keys(blackList).forEach(key => {
        if (Math.round((new Date().getTime() - blackList[key].getTime()) / 60000) > EMAIL_TIMEOUT) {
            console.log('deleted ' + key)
            delete blackList[key]
        }
    })
    next()
}

export const forwardMessage = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const postData: Dto.Email = req.body;

    let origin = req.header("origin")

    Template.forwardMessage(
        {
            Email: postData.email,
            Name: postData.name
        },
        postData.message,
        origin
    )
        .then(data => {
            console.log('Added ' + postData.email)
            blackList[postData.email] = new Date()
            res.sendStatus(200);
        })
        .catch(error => {
            return next(new Errors.InternalEmailService())
        })
}