const express = require('express')
const fs = require('fs');
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;



exports.getAllProducts = (req, res) => {
  res.json(products);
};

exports.getProduct = (req, res) => {
  const id = +req.params.id; 
  const product = products.find((p) => id === p.id);
  res.json(product);
};

exports.createProduct = (req, res) => {
  products.push(req.body);
  res.json(req.body)
};

exports.deleteProduct = (req,res) => {
  const id = +req.params.id;

  const productIndex = products.findIndex(p=>p.id===id);
  const product = products[productIndex];
  products.splice(productIndex, 1);

  res.json(product);
};

exports.updateCompleteProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex(p=>p.id===id)
  products.splice(productIndex, 1, {...req.body, id: id})
  const product = products[productIndex]
  res.status(201).json(product);
};


exports.updatePartiallyProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex(p=>p.id===id)
  const product = products[productIndex]
  products.splice(productIndex, 1, {...product,...req.body, id: id})
  res.status(201).json(product);
};
