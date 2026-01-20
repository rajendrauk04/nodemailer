import sendEmail from "../utils/sendEmail.js";

const sendTestMail = async (req, res) => {
    try {
        await sendEmail({
            email: req.body.email,
            subject: "Welcome to our Academy--Digital Web Academy--",
            message: `<h1>Hello Student.</h1><p>This is a Warm Welcome email sent from --Digital Web Academy--</p>`,
        });

        return res.status(200).json({success: true, message: "Email Sent"});
    } catch (error) {
        return res.status(500).json({success: false, message: "Email Failed"});
    }
};

export default sendTestMail;