import { Product } from '../types';
import { saveProduct as dbSaveProduct, getProducts as dbGetProducts, getProduct as dbGetProduct, updateProduct as dbUpdateProduct, deleteProduct as dbDeleteProduct } from './db';

export async function saveProduct(productData: Omit<Product, 'id'>): Promise<Product> {
  try {
    const savedProduct = await dbSaveProduct(productData);
    // Dispatch update event after successful save
    window.dispatchEvent(new CustomEvent('bitopia_db_update'));
    return savedProduct;
  } catch (error) {
    console.error('Error saving product:', error);
    throw error;
  }
}

export async function getProducts(): Promise<Product[]> {
  try {
    return await dbGetProducts();
  } catch (error) {
    console.error('Error getting products:', error);
    throw error;
  }
}

export async function getProduct(id: string): Promise<Product | null> {
  try {
    return await dbGetProduct(id);
  } catch (error) {
    console.error('Error getting product:', error);
    throw error;
  }
}

export async function updateProduct(id: string, productData: Omit<Product, 'id'>): Promise<Product> {
  try {
    const updatedProduct = await dbUpdateProduct(id, productData);
    // Dispatch update event after successful update
    window.dispatchEvent(new CustomEvent('bitopia_db_update'));
    return updatedProduct;
  } catch (error) {
    console.error('Error updating product:', error);
    throw error;
  }
}

export async function deleteProduct(id: string): Promise<void> {
  try {
    await dbDeleteProduct(id);
    // Dispatch update event after successful deletion
    window.dispatchEvent(new CustomEvent('bitopia_db_update'));
  } catch (error) {
    console.error('Error deleting product:', error);
    throw error;
  }
}