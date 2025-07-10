
import { deleteCategory, updateCategory,createCategory, getCategories, getCategoryById} from '../model/categoryModel.js';
import {logger} from '../util/logger.js'


export const getCategoriesController = async (req, res) => {
   try{
    const categories = req.body;
    const newCategory = await createCategory(categories);
    res.json(categories);
   }catch(error){
    logger(error);
    res.status(500).json({message: error.message});
   }
}

export const createCategoryController = async (req, res) => {
   try{

    const categories = await getCategories();
    res.json(newCategory);
   }catch(error){
    logger(error);
    res.status(500).json({message: error.message});
   }
}

export const getCategoryByIdController= async (req, res) => {
   try{
  const {id} = req.params;
  const category = await getCategoryById(id);
  if(!category){
    return res.status(404).json({message: 'Category not found'});
  }
  res.json(category);
   }catch(error){
    logger(error);
    res.status(500).json({message: error.message});
   }
}

export const updateCategoryController = async (req, res) => {
   try{
    const {id} = req.params;
    const category = req.body;
    const updateCategory = await updateCategory(id, category);
    if(!updateCategory){
      return res.status(404).json({message: 'Category not found'});
    }
    res.json(updateCategory);
   }catch(error){
    logger(error);
    res.status(500).json({message: error.message});
   }
}


export const deleteCategoryController = async (req, res) => {
   try{
    const {id} = req.params;
   await deleteCategory(id);
   res.json({message: 'Category deleted successfully'});
   }catch(error){
    logger(error);
    res.status(500).json({message: error.message});
   }
}
