const Product = require("../models/products");

exports.createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);

    res.status(200).json({
      status: "Success",
      data: {
        product,
      },
    });
  } catch (err) {
    console.log("Error: ", err);
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();

    res.status(200).json({
      status: "Success",
      results: products.length,
      data: {
        products,
      },
    });
  } catch (err) {
    console.log("Error :", err);
  }
};

exports.getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    res.status(200).json({
      status: "Success",
      data: {
        product,
      },
    });
  } catch (err) {
    console.log("Error : ", err);
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "Success",
      data: null,
    });
  } catch (err) {
    console.log("Error : ", err);
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "Success",
      data: {
        product,
      },
    });
  } catch (err) {
    console.log("Error : ", err);
  }
};
