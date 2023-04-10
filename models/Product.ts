import { Schema, model, models } from 'mongoose';

export interface IProduct {
  _id: number;
  name: string;
  count: string;
  price: number;
  country: string;
  descriptions: string;
  category: string
}

const productSchema = new Schema<IProduct>({
  name: String,
  count: String,
  price: Number,
  country: String,
  descriptions: String,
  category: String,
});

const Product = models.Product|| model<IProduct>('Product', productSchema);

export default Product;