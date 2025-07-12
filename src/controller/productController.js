import { createProduct, getProducts, getProductById, updateProduct, deleteProduct } from '../model/productModel.js';
import { logger } from '../util/logger.js';

export const getProductsController = async (req, res) => {
  try {
    const products = await getProducts();
    res.json(products);
  } catch (error) {
    logger(error);
    res.status(500).json({ message: error.message });
  }
};

export const createProductController = async (req, res) => {
  try {
    const product = req.body;
    const newProduct = await createProduct(product);
    res.status(201).json(newProduct);
  } catch (error) {
    logger(error);
    res.status(500).json({ message: error.message });
  }
};

export const getProductByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await getProductById(id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    logger(error);
    res.status(500).json({ message: error.message });
  }
};

export const updateProductController = async (req, res) => {
  try {
    const { id } = req.params;
    const product = req.body;
    const updatedProduct = await updateProduct(id, product);
    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(updatedProduct);
  } catch (error) {
    logger(error);
    res.status(500).json({ message: error.message });
  }
};

export const deleteProductController = async (req, res) => {
  try {
    const { id } = req.params;
    await deleteProduct(id);
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    logger(error);
    res.status(500).json({ message: error.message });
  }
};
