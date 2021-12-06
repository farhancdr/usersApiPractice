const yup = require("yup");

const priceSchema = yup.object().shape({
  product_name: yup
    .string()
    .test(
      "is-alpha",
      "Product name must contain only letters",
      (value) => typeof value === "string"
    )
    .min(4, "Product name must be at least 4 characters long")
    .max(25, "Product name must be less than 25 characters long")
    .required("Product name is required"),
  product_price: yup
    .number()
    .typeError("Price must be a number")
    .positive("Price must be greater than zero")
    .required("Price is required"),
});

module.exports = priceSchema;
