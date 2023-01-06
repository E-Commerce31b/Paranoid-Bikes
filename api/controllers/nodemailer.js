const nodemailer = require("nodemailer")

const sendMail = async (email) =>{

  const config ={
    host : "smtp.gmail.com",
    port : 587,
    secure: false,
    auth : {
      user : "profyarg@gmail.com",
      pass :  "gokwwdnqdxtrczks",
       },
    tls: {
      rejectUnauthorized: false
  }
  }
  const mensaje = {
    from : "profyarg@gmail.com",
    to : email,
    subject : "Gracias por tu compra",
    text : "Tu pago se ha acreditado con éxito"


  }
const transport = nodemailer.createTransport(config)
const info = await transport.sendMail(mensaje)


console.log(info)

}

module.exports = {
sendMail
}