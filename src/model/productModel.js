import knexInstance from '../config/database.js';

export const createProduct = async (product) => {
    const [newProduct] = await knexInstance('products').insert(product).returning('*');
    return newProduct;
}

export const getProducts = async () => {
    const [products] = await knexInstance('products').select('*');
    return products;
}

export const getProductById = async (id) => {
    const product = await knexInstance('products').where('id', id).first();
    return product;
}

export const updateProduct = async (id,product) => {
    const [updateProduct] = await knexInstance('products').where('id',id).whereNull('deleted_at').update({deleted_at: new Date()}).returning('*');
    return updateProduct;
}

export const deleteProduct = async (id) => {
    const [deletedProduct] = await knexInstance('products').where('id',id).whereNull('deleted_at').update({deleted_at: new Date()}).returning('*');
    return deletedProduct;
}

