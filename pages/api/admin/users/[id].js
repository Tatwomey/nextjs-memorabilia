import User from '@/Models/User';
import db from '@/utils/db';
import { getToken } from 'next-auth/jwt';

const handler = async (req, res) => {
  const user = await getToken({ req });
  if (!user || !user.isAdmin) {
    return res.status(401).send('admin signin required');
  }

  if (req.method === 'DELETE') {
    return deleteHandler(req, res);
  } else {
    return res.status(400).send({ message: 'Method not allowed' });
  }
};

const deleteHandler = async (req, res) => {
  await db.connect();
  const user = await User.deleteOne({ _id: req.query.id });
  if (user.deletedCount > 0) {
    if (user.email === 'admin@example.com') {
      await db.disconnect();
      return res.status(400).send({ message: 'Cannot delete admin' });
    }
    await db.disconnect();
    return res.send({ message: 'User Deleted' });
  } else {
    await db.disconnect();
    return res.status(404).send({ message: 'User Not Found' });
  }
};

export default handler;
