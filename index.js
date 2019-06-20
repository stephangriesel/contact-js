const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();

const path = require('path');

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/api/form', (req,res) => {
    nodemailer.createTestAccount((err,account) => {
        const htmlEmail = `
        <h3>Contact</h3>
        <ul>
            <li>Name: ${req.body.name}</li>
            <li>Email: ${req.body.email}</li>
        </ul>
        <h3>Message</h3>
        <p>${req.body.message}</p>
        `

        let transporter = nodemailer.createTransport({
            host: '',
            port: 000,
            auth: {
                user: `${username}`,
                pass: `${password}`
            }
        })

        let mailOptions = {
            from: 'info@mydomain.com',
            to: 'fresh@freshdesk.com',
            replyTo: 'info@mydomain.com',
            subject: 'New Message',
            text: req.body.message,
            html: htmlEmail
        }

        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                return console.log(err)
            }

            console.log('Message sent: %s', info.message)
            console.log('Message URL: %s', nodemailer.getTestMessageUrl(info))
        })
    })
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => console.log(`started on ${PORT}`));