import {Router} from "express";
import { createProductController, getProductsController, getProductByIdController, updateProductController, deleteProductController } from "../controller/productController.js";

const router = Router();

router.get('/', getProductsController);
router.post('/', createProductController);
router.get('/:id', getProductByIdController);
router.put('/:id', updateProductController);
router.delete('/:id', deleteProductController);

export default router;
