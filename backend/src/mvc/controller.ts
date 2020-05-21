import { Router } from 'express';
import * as express from 'express';
import { validate, ValidationError } from 'class-validator';
import { HttpError } from './httpError';
import { plainToClass } from 'class-transformer';

export class Controller {
    path: string;
    router: Router;

    constructor () {} 

    // public validator = <T>(type: any, skipMissingProperties = false): express.RequestHandler => {
    //     return (req, res, next) => {
    //         validate(plainToClass(type, req.body), { skipMissingProperties })
    //             .then((errors: ValidationError[]) => {
    //                 if (errors.length > 0) {
    //                     const message = errors.map((error: ValidationError) => Object.values(error.constraints)).join(', ');
    //                     next(new HttpError(400, message))
    //                 } else {
    //                     next();
    //                 }
    //             });
    //     };
    // }

    public validator = <T>(type: any, skipMissingProperties = false): express.RequestHandler => {
        return (req, res, next) => {
            validate(plainToClass(type, req.body), { skipMissingProperties })
                .then((errors: ValidationError[]) => {
                    if (errors.length > 0) {
                        const message = errors.map((error: ValidationError) => Object.values(error.constraints)).join(', ');
                        next(new HttpError(400, message))
                    } else {
                        next();
                    }
                });
        };
    }


    public logRoute = (request: express.Request, response: express.Response, next: express.NextFunction) => {
        console.info(`[${request.method}] ${request.path}`);
        next();
    }
}