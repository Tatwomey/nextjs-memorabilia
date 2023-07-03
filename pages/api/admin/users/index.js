import { getToken } from "next-auth/jwt";
import User from "@/Models/User";
import db from "@/utils/db";

const handler = async (req, res) => {
const user = await getToken ({req, res})
if (!user || !user.isAdmin) {
    return res.status(401).send('admin signup required');
}
    await db.connect();
    const users = await User.find({});
    await db.disconnect();
    res.send(users);
  };
  
  export default handler;