import { Constants } from '../../../constants'
import { MailJet } from './mailjet'

export namespace Template {
    export const sendConfirmation = (
        client: { Email: string, Name: string },
        message: string,
        domain: string
    ): Promise<any> => {
        let to = [client]
        let subject = "Message Confirmation"
        let text = `Hello ${client.Name}, Thank you for sending me the message: 
    "${message}"
    I will get back to you shortly.
    Best Regards
    Jimmy Vo`
        let html = `
    <h4>Dear ${client.Name}, welcome to <a href="https://${domain}">${domain}</a>!</h4>
    <p>This is a confirmation that I have received your message:</p>
    <blockquote>"${message}"</blockquote>
    <p>This is a bot, please don't reply to this email. I will get back to you shortly.</p>
    <br/>
    <p>Thank you</p>
    <p>Jimmy Vo</p>
  `
        return MailJet.send(to, subject, text, html)
    }


    export const forwardMessage = (
        client: { Email: string, Name: string },
        message: string,
        origin: string
    ): Promise<any> => {
        let to = [{ Email: Constants.MailJet.MJ_OWNER_EMAIL, Name: Constants.MailJet.MJ_OWNER_NAME }]
        let subject = `[${origin}] message from ${client.Name} (${client.Email})`
        let text = `Hello ${Constants.MailJet.MJ_OWNER_NAME}, 
    You got a message from ${client.Name} (${client.Email}): 
    ${message}`

        let html = `
    <h4>Hello ${Constants.MailJet.MJ_OWNER_NAME}, You got a message sent from <a href="${origin}">${new URL(origin).host}</a>!</h4>
    <ul>
      <li><p>Name: ${client.Name}</p></li><li><p>Email: ${client.Email}</p></li><li><p>Message:</p></li>
    </ul>
    <blockquote> ${message}</blockquote>`

        return MailJet.send(to, subject, text, html)
    }
}