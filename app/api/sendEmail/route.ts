 import nodemailer from 'nodemailer';

   export default async function handler(req : any, res : any) {
    console.log(req.method);
     if (req.method === 'POST') {
       let transporter = nodemailer.createTransport({
         host: 'smtp.example.com',
         port: 587,
         secure: false,
         auth: {
           user: 'healthconnect95@gmail.com',
           pass: 'your-email-password',
         },
       });

       let mailOptions = {
         from: 'healthconnect95@gmail.com',
         to: 'recipient@example.com',
         subject: 'New Form Submission', 
         text: 'Hello, this is a test email.', 
       };

       try {
         let info = await transporter.sendMail(mailOptions);
         console.log('Message sent: %s', info.messageId);
         res.status(200).json({ message: 'Email sent successfully' });
       } catch (error) {
         console.error(error);
         res.status(500).json({ message: 'An error occurred while sending the email' });
       }
     } else {
       res.setHeader('Allow', ['POST']);
       res.status(405).end(`Method ${req.method} Not Allowed`);
     }
   }