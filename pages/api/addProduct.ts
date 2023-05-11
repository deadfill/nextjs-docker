
// import Typesense from 'typesense';
import connectMongo from '../../libs/mongodb';
import Product from '../../models/Product';
import type { NextApiRequest, NextApiResponse } from 'next';

// const client = new Typesense.Client({
//   nodes: [
//     {
//       host: 'localhost',
//       port: 8108,
//       protocol: 'http',
//     },
//   ],
//   apiKey: 'xyz',
//   connectionTimeoutSeconds: 2,
// });

export default async function addProduct(req: NextApiRequest, res: NextApiResponse) {
  try {
    console.log('CONNECTING TO MONGO');
    await connectMongo();
    console.log('CONNECTED TO MONGO');

    console.log('CREATING DOCUMENT');
    const product = await Product.create(req.body);
    console.log('CREATED DOCUMENT');

    res.json({ product });
    // const product = req.body;
    

    // console.log("создание индекса typesense");
    // product["category"] = product["category.lvl"];
    // delete product["category.lvl"];

    // client.collections('products').documents().upsert(product);
    // console.log("complete");

    // console.log(product);

    // res.json({ product });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}