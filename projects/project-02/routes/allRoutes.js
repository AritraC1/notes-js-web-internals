const express = require("express");
const dotenv = require("dotenv");
const User = require("../model/userModel");

dotenv.config();

const router = express.Router();

// health check endpoint
router.get("/", (req, res) => {
  res.send("The server is running");
});

// Create new users in DB
router.post("/users", async (req, res) => {
  const body = req.body;

  if (
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender ||
    !body.job_title
  ) {
    return res.status(400).json({
      message: "Missing Fields",
    });
  }

  const result = await User.create({
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    gender: body.gender,
    jobTitle: body.job_title,
  });

  return res.status(201).json({
    message: "Success",
    data: result,
  });
});

router.get("/users", async (req, res) => {
  const allDbUsers = await user.find({});

  const html = `
    <ul>
    ${allDbUsers.map((user) => `<li>${user.firstName} - ${user.email}</li>`).join("")}
    </ul>
    `;

  return res.status(200).send(html);
});

router
  .route("/users/:id")
  .get(async (req, res) => {
    const user = await User.findById(req.params.id);

    return res.json(user);
  })
  .patch(async (req, res) => {
    const body = req.body;
    await User.findByIdAndUpdate(req.params.id, body);

    return res.status(200).json({ status: "success" });
  })
  .delete(async (req, res) => {
    await User.findByIdAndDelete(req.params.id);

    return res.status(200).json({ status: "success" });
  });

module.exports = router;
