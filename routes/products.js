const express = require("express");
const router = express.Router();

const productSchema = require("./../schema/productSchema");

const productDetailsValidation = async ({ product_name, product_price }) => {
  try {
    await productSchema.validate({ product_name, product_price });
  } catch (err) {
    return err.message;
  }
};

const products = [
  { id: 1, product_name: "Samsung s20", product_price: 520 },
  { id: 2, product_name: "Iphone 13pro", product_price: 999 },
  { id: 3, product_name: "Hair Straightener", product_price: 17 },
];

router.get("/", function (req, res) {
  res.send(products);
});

router.get("/:id", function (req, res) {
  const id = req.params.id;

  const product = products.find((product) => product.id === parseInt(id));

  if (!product) return res.status(404).send("Product not found");
  res.send(product);
});

router.post("", async function (req, res) {
  const id = products.length + 1;
  const { product_name, product_price } = req.body;

  const error = await productDetailsValidation({ product_name, product_price });
  if (error) return res.status(400).send(error);

  products.push({ id, product_name, product_price });
  const product = products.find((product) => product.id == id);
  res.json(product);
});

router.put("/:id", async function (req, res) {
  const id = req.params.id;
  const { product_name, product_price } = req.body;

  const error = await productDetailsValidation({
    product_name,
    product_price,
  });
  if (error) return res.status(400).send(error);

  const product = products.find((product) => product.id == id);

  if (!product) return res.status(404).send("product not found");

  product.product_name = product_name;
  product.product_price = product_price;

  res.send(product);
});

router.delete("/:id", function (req, res) {
  const id = req.params.id;
  const product = products.find((product) => product.id == id);

  if (!product) return res.status(404).send("product not found");

  const index = products.indexOf(product);
  products.splice(index, 1);

  res.json(product);
});

router.patch("/:id", function (req, res) {
  const id = req.params.id;
  const { product_name, product_price } = req.body;

  const product = products.find((product) => product.id == id);

  if (!product) return res.status(404).send("product not found");

  if (product_name) product.product_name = product_name;
  if (product_price) product.product_price = product_price;

  res.json(product);
});

module.exports = router;
