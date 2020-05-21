import { Constants } from '../../../constants'

const mailjet = require('node-mailjet').connect(Constants.MailJet.MJ_APIKEY_PUBLIC, Constants.MailJet.MJ_APIKEY_PRIVATE)

export namespace MailJet {

  export const send = (
  to: { Email: string, Name: string }[],
  subject: string,
  text: string,
  html: string,
): Promise<any> => {
  return mailjet
    .post("send", { 'version': 'v3.1' })
    .request({
      "Messages": [{
        "From": { Email: Constants.MailJet.MJ_SENDER_EMAIL, Name: Constants.MailJet.MJ_OWNER_NAME },
        "To": to,
        "Subject": subject,
        "TextPart": text,
        "HTMLPart": html
      }]
    })
}
}
