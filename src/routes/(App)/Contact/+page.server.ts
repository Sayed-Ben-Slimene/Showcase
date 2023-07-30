// +page.server.ts
import { RequestHandler } from "@sveltejs/kit";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sportifyapp00@gmail.com',
    pass: 'rulrljfrzqctiqcd'
  }
});

export const actions = {
  sendMail: async ({ locals , request }) => {
    try {
      const data = Object.fromEntries(await request.formData()) as {
        // user:string;
        email: string;
        message: string;
        country: string;
        code: string;
        city: string;
        address: string;
        company: string;


      };
      // [locals.user?.email]
      const mailOptions = {
        from: 'sayedbenslimane@gmail.com',
        to: [data.email],
        cc: 'sayedbenslimane@gmail.com',
        subject: 'Email With Attachments Testing',
        html: `<head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Professional Email Template</title>
          <style>
            /* Reset styles to ensure consistent rendering across email clients */
            body, h1, h2, h3, h4, h5, h6, p, ol, ul, li, table, tr, td {
              margin: 0;
              padding: 0;
              font-family: Arial, sans-serif;
              line-height: 1.5;
            }
            table {
              border-collapse: collapse;
              width: 100%;
            }
            table td {
              border: 1px solid #dddddd;
              padding: 10px;
            }
            /* Main styles */
            body {
              background-color: #f2f2f2;
            }
            .container {
              max-width: 700px;
              margin: 0 auto;
              padding: 20px;
              background-color: #ffffff;
            }
            h1 {
              color: #007bff;
              text-align: center;
              margin-bottom: 20px;
            }
            p {
              color: #444444;
              font-size: 18px;
              margin-bottom: 10px;
            }
            h3 {
              color: #006600;
              margin-bottom: 10px;
              font-size: 22px;

            }


            .btn {
              display: inline-block;
              background-color: #007bff;
              color: #ffffff;
              text-decoration: none;
              padding: 10px 20px;
              border-radius: 4px;
              font-weight: bold;
            }
            .footer {
              text-align: center;
              margin-top: 30px;
              padding-top: 10px;
              border-top: 1px solid #dddddd;
              color: #888888;
              font-size: 12px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>Enterprise Communication Email From ${locals.user?.email}</h1>
            <h3>For company : [${data.company}],</h3>
            <h3>Address : [${data.address}] [${data.code}]</h3>
            <h3>city & country : [${data.city}],[${data.country}]</h3>
  
            <h3>Message : [${data.message}]</h3>


            <p>
              We hope this email finds you well. We are pleased to collaborate with your esteemed company and are excited about the opportunities ahead. Our team at [Your Company Name] is ready to work together to achieve mutual success.
            </p>
            <p>
              As we move forward, we would like to discuss the following key points:
            </p>
            <ul>
              <li>Project Scope and Objectives</li>
              <li>Timeline and Milestones</li>
              <li>Roles and Responsibilities</li>
              <li>Communication Channels</li>
              <li>Next Steps</li>
            </ul>
            <p>
              We value your input and look forward to setting up a meeting to discuss these details in person. Please let us know your availability so we can arrange a convenient time.
            </p>
            <p>
              If you have any questions or need further information, feel free to reach out to our team at [${locals.user?.email}].
            </p>

            <p>
              Best regards,<br>
  
            </p>
          </div>
          <div class="footer">
            <p>
              This email is sent from ${locals.user?.email}. If you have any concerns or wish to unsubscribe from our communications, please <a href="#">click here</a>.
            </p>
            <p>
              © 2023 ${locals.user?.name}. All rights reserved.
            </p>
          </div>
        </body>
   
        `,
        attachments: [
          {
            filename: 'logo-Showcase.png',
            path: './src/image/showcase-low-resolution-logo-color-on-transparent-background.png'
          }
          
        ]
      };


      console.log(locals.user?.email);
      console.log(locals.user?.email);
      console.log(locals.user?.email);

      await transporter.sendMail(mailOptions);
      console.log("Email Sent Successfully to " + mailOptions.to);

      // You can return any response you want here.
      return {
        status: 200,
        body: { message: "Email sent successfully" }
      };
    } catch (error) {
      console.error("Error sending email:", error);
      // Return an error response
      return {
        status: 500,
        body: { message: "Error sending email" }
      };
    }
  }
};
