import {Router} from "express";
import { createCategoryController,getCategoriesController, getCategoryByIdController, updateCategoryController, deleteCategoryController } from "../controller/categoryController.js";

const router = Router();

router.get('/', getCategoriesController);
router.post('/', createCategoryController);
router.get('/:id', getCategoryByIdController);
router.put('/:id', updateCategoryController);
router.delete('/:id', deleteCategoryController);    


export default router;
