require('dotenv').config();

const nodemailer = require('nodemailer');

export async function post(req, res) {
    const {name, mail, message} = req.body.data;

    let transporter = nodemailer.createTransport({
        host: 'smtp.yandex.ru',
        port: 465,
        secure: true,
        auth: {
            user: process.env.POST_USER,
            pass: process.env.POST_PASS,
        },
    })

    let mailOptions = {
        from: name + ' <marinaengwell@yandex.ru>',
        to: 'marinaengwell@yandex.ru',
        subject: 'Сообщение от пользователя '+name+', почта '+mail,
        text: message,
        html: message,
    };

    transporter.sendMail(mailOptions, (error, result) => {
        if (error) {
            console.log(error);
            res.end(JSON.stringify({status: false}));
        }else{
            //console.log(result)    
            res.end(JSON.stringify({status: true}));
        }
    });
    
}