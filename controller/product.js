const express = require("express");
const model = require("../model/Product");
const Product = model.Product;

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(201).send(products);
  } catch (err) {
    res.status(401).json(err);
  }
};

exports.getProduct = async(req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findById(id);
    res.status(201).json(product);
  } catch (err) {
    res.status(401).json(err);
    console.log(err)
  }
};

exports.createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);

    const savedProduct = await product.save();
    res.status(201).json({ savedProduct });
  } catch (err) {
    console.log(err);
    res.status(401).send(err);
  }
};


exports.deleteProduct = async(req, res) => {
  try{
    const id = req.params.id;
    const product = await Product.findOneAndDelete({_id : id});
    res.status(201).json(product);
   }
   catch(err){
    res.status(400);
    console.log(err);
   }
};

exports.updateCompleteProduct = async(req, res) => {
 try{
  const id = req.params.id;
  const product = await Product.findOneAndReplace({_id : id}, req.body, {new : true});
  res.status(201).json(product);
 }
 catch(err){
  res.status(400);
  console.log(err);
 }
};


exports.updatePartiallyProduct = async(req, res) => {
  try{
    const id = req.params.id;
    const product = await Product.findOneAndUpdate({_id : id}, req.body, {new : true});
    res.status(201).json(product);
   }
   catch(err){
    res.status(400);
    console.log(err);
   }
};
