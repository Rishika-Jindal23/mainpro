const nodemailer = require('nodemailer');


exports.createEmail = async (req, res, next) => {
  try {
    console.log(req.body)
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      // service: 'gmail'
      port: process.env.EMAIL_PORT,
      secure: true,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
      //activate in gmail "less secure app" option
    });



    const mailData = {
      from: `Rishika Jindal < ${process.env.EMAIL_USERNAME}> `,
      to: 'jindalrishika971@gmail.com',
      subject: `Message FROM ${req.body.name}`,
      text: req.body.message + " | Sent To: " + req.body.email,
      html: `<div>${req.body.message}</div><p>Sent from:
            ${req.body.email}</p>`
    }
    // console.log("mail options>>>>>", mailData);

    transporter.sendMail(mailData, function (err, info) {
      if (err)
        console.log(err)
      else
        console.log(info)
    })
    res.status(200).send('mail sent successfully')
  }
  catch (err) {
    res.status(404).send("email not sent", err)
  }





};
