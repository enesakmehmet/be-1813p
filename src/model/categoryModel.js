
import knexInstance from '../config/database.js';

export const getCategories = async (category) => {
    const [newCategory] = await knexInstance('categories').insert(category).returning('*');
    return newCategory;
}

export const categories = async () =>{
    const [categories] = await knexInstance('categories').select('*');
    return categories;
}


export const getCategoryById = async (id) => {
    const category = await knexInstance('categories').where('id', id).first();
    return category;
}

export const updateCategory = async (id) => {
   const [updateCategory] = await knexInstance('categories').where('id',id).update(category).returning('*')
   return updateCategory;
}

export const deleteCategory = async (id) => {
    const [deletedCategory] = await knexInstance('categories').where('id',id).where('deleted_at', null).update('deleted_at', new Date()).returning('*');
    return deletedCategory;
}

