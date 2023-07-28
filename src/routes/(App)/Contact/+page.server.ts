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
  sendMail: async ({ request }) => {
    try {
      const data = Object.fromEntries(await request.formData()) as {
        email: string;
        message: string;
      };

      const mailOptions = {
        from: 'sportifyapp00@gmail.com',
        to: [data.email],
        cc: 'sayedbenslimane@gmail.com',
        subject: 'Email With Attachments Testing',
        html: `<h1 style="color: Aqua">Welcome To SHOWCASE </h1>
          <h4 style="color: red">"Learn The Way, Create Your Own Way"</h4>
          ${data.message}`,
        attachments: [
          {
            filename: 'logo-Showcase.png',
            path: './src/image/showcase-low-resolution-logo-color-on-transparent-background.png'
          }
          
        ]
      };

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
