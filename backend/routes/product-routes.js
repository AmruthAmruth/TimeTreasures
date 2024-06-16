import express from 'express'
import { upload } from '../middleware/middleware.js'
import { addProduct, addToCart, deleteProduct, getAllProduct, getProductById, productOrder, removeFromcart, updateProduct } from '../controllers/product-controller.js'



const productRouter = express.Router()  
productRouter.post('/',upload.single('image'),addProduct)
productRouter.put('/:id',upload.single('image'),updateProduct)
productRouter.get('/',getAllProduct)
productRouter.delete('/:id',deleteProduct)
productRouter.get('/:id',getProductById)
productRouter.post('/cart',addToCart)
productRouter.post('/removecart',removeFromcart)
productRouter.post('/order',productOrder)
export default productRouter