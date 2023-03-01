const Product = require('../models/product')
const asyncwrapper = require('../middleware/async')
 
const getAllProducts = asyncwrapper(async (req, res) => {
    const products = await Product.find({})
    res.status(200).json({products})
 })

 const getProduct = asyncwrapper( async (req, res) => {
    const {id:productID} = req.params
    const product = await Product.findOne({_id: productID})
    if(!product) {
        return new Error(`No product with id: ${productID}`)
    }
    res.status(200).json({product})
 })

 const createProduct = asyncwrapper( async (req, res) => {
    const product = await Product.create(req.body)
    res.status(200).json({product})
 })

 const deleteProduct = asyncwrapper( async (req, res) => {
    const {id:productID} = req.params
    const product = await Product.findOneAndDelete({_id:productID})
    if(!product) {
        return new Error(`No product with id: ${productID}`, 404)
    }
    res.status(200).json({task: null, status: 'success'})
 })

 const updateProduct = asyncwrapper( async (req, res) => {
    const {id:productID} = req.params
    const product = await Product.findOneAndUpdate({_id: productID}, req.body, {
        new : true,
        runValidators:true,
    })
    if(!product) {
        return new Error(`No product with id: ${productID}`, 404)
    }
    res.status(200).json({product})
 })

 module.exports = {
    getAllProducts,
    getProduct,
    createProduct,
    deleteProduct,
    updateProduct,
 }