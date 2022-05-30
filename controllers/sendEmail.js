const nodemailer = require('nodemailer');
const sgmail = require('@sendgrid/mail');

require('dotenv').config();

const sendEmailEthereal = async (req, res) => {
    const testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'carol.sipes68@ethereal.email',
            pass: 'ZtvDKpmTQyXNaMwKkr'
        }
    });

    let info = await  transporter.sendMail({
        from : "'Kheiro Barbarous' <kheirobarbarous70@gmail.com>",
        to: "abdelhakrabhi0@gmail.com",
        subject : "Automated email",
        text: 'Yes, It is an email sent with nodejs',
        html: '<h3>Enjoy the reality that you can send an email with nodejs now :)</h3>'
    });

    res.json(info);
}

const sendEmail = async (req, res) => {
    sgmail.setApiKey(process.env.SENDGRID_API_KEY);

    const msg = {
        from : "'Rabhi abdelhak' <abdelhakrabhi0@gmail.com>",
        to: 'kheirobarbarous7@gmail.com',
        subject: 'sent By send Grid',
        text: 'Hello My friend',
        html: '<h3>This email is for a testing perpose</h3><a href="https://abdelhak-rabhi.netlify.app/">Visite my website</a>'
    }

    const info = await sgmail.send(msg);
    res.send(info)
}

module.exports = {sendEmail , sendEmailEthereal}