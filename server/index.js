const express = require("express")
const bodyParser = require("body-parser")
const nodemailer = require("nodemailer")
const cors = require("cors")
require("dotenv").config()

const app = express()
const port = process.env.PORT || 3001

app.use(cors())
app.use(bodyParser.json())

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "salma.aboutofil@gmail.com",
    subject: `New message from ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    res.status(200).json({ message: "Email sent successfully" })
  } catch (error) {
    console.error("Error sending email:", error)
    res.status(500).json({ message: "Error sending email" })
  }
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

