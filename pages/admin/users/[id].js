import User from '@/Models/User';
import db from '@/utils/db';
import { getToken } from 'next-auth/jwt';

const handler = async (req, res) => {
  try {
    const user = await getToken({ req });
    if (!user || !user.isAdmin) {
      return res.status(401).send('admin signin required');
    }

    if (req.method === 'DELETE') {
      return deleteHandler(req, res);
    } else {
      return res.status(400).send({ message: 'Method not allowed' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: 'Internal Server Error' });
  }
};

const deleteHandler = async (req, res) => {
  try {
    await db.connect();
    const user = await User.findById(req.query.id);
    if (user) {
      if (user.email === 'admin@example.com') {
        await db.disconnect();
        return res.status(400).send({ message: 'Cannot delete admin' });
      }
      await user.remove();
      await db.disconnect();
      return res.send({ message: 'User Deleted' });
    } else {
      await db.disconnect();
      return res.status(404).send({ message: 'User Not Found' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: 'Internal Server Error' });
  }
};

export default handler;
