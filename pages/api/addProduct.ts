import connectMongo from '../../libs/mongodb';
import Product from '../../models/Product';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function addProduct(req: NextApiRequest, res: NextApiResponse) {
  try {
    console.log('CONNECTING TO MONGO');
    await connectMongo();
    console.log('CONNECTED TO MONGO');

    console.log('CREATING DOCUMENT');
    const product = await Product.create(req.body);
    console.log('CREATED DOCUMENT');

    res.json({ product });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}