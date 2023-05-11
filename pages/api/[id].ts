import connectMongo from '../../libs/mongodb';
import Product from '../../models/Product';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function deleteProduct(req: NextApiRequest, res: NextApiResponse) {
  try {
    console.log(req.query.id)
    res.json({ });

  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}