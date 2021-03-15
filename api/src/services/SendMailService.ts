/**
 * Criar as configurações para o envio do email
 */

import nodemailer, {Transporter} from 'nodemailer'
class SendMailService {

  private client: Transporter 

  /**
   * CONSTRUTOR QUE RECEBE TODOS OS DADOS PADRÕES
   */

  constructor(){
    nodemailer.createTestAccount().then(account => {
      const transporter = nodemailer.createTransport({
        host: account.smtp.host,
        port: account.smtp.port,
        secure: account.smtp.secure,
          auth: {
            user: account.user,
            pass: account.pass,
          }
      })

      this.client = transporter;
    })
  }

  /**
   * Assunto e Corpo do Email
   */
  async execute(to: string, subject: string, body: string){
    const message = await this.client.sendMail({
      to, 
      subject,
      html: body,
      from: "NPS <noreplay@nps.com.br>"
    })

    console.log('Message sent: %s', message.messageId)
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(message))
  }
}

export default new SendMailService()
//export {SendMailService}