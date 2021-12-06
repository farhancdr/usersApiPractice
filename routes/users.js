const express = require("express");
const router = express.Router();

const userSchema = require("./../schema/userSchema");

const userDetailsValidation = async ({ first_name, last_name }) => {
  try {
    await userSchema.validate({ first_name, last_name });
  } catch (err) {
    return err.message;
  }
};

const users = [
  { id: 1, first_name: "Farhan", last_name: "Sadek" },
  { id: 2, first_name: "Sabbir", last_name: "Ahmed" },
  { id: 3, first_name: "Rafsan", last_name: "Mahmud" },
];

router.get("/", function (req, res) {
  res.send(users);
});

router.get("/:id", function (req, res) {
  const id = req.params.id;

  const user = users.find((user) => user.id === parseInt(id));

  if (!user) return res.status(404).send("User not found");
  res.send(user);
});

router.post("", async function (req, res) {
  const id = users.length + 1;
  const { first_name, last_name } = req.body;

  const error = await userDetailsValidation({ first_name, last_name });
  if (error) return res.status(400).send(error);

  users.push({ id, first_name, last_name });
  const user = users.find((user) => user.id == id);
  res.json(user);
});

router.put("/:id", async function (req, res) {
  const id = req.params.id;
  const { first_name, last_name } = req.body;

  const error = await userDetailsValidation({
    first_name,
    last_name,
  });
  if (error) return res.status(400).send(error);

  const user = users.find((user) => user.id == id);

  if (!user) return res.status(404).send("User not found");

  user.first_name = first_name;
  user.last_name = last_name;

  res.send(user);
});

router.delete("/:id", function (req, res) {
  const id = req.params.id;
  const user = users.find((user) => user.id == id);

  if (!user) return res.status(404).send("User not found");

  const index = users.indexOf(user);
  users.splice(index, 1);

  res.json(user);
});

router.patch("/:id", function (req, res) {
  const id = req.params.id;
  const { first_name, last_name } = req.body;

  const user = users.find((user) => user.id == id);

  if (!user) return res.status(404).send("User not found");

  if (first_name) user.first_name = first_name;
  if (last_name) user.last_name = last_name;

  res.json(user);
});

module.exports = router;
