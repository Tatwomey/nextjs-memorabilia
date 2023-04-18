/** @format */

import Product from '@/Models/product';
import db from '@/pages/utils/db';

const handler = async (req, res) => {
  await db.connect();
  const product = await Product.findById(req.query.id);
  await db.disconnect();
  res.send(product);
};

export default handler;
