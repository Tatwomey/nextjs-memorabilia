import { getToken } from "next-auth/jwt";

const handler = async (req, res) => {
  const user = await getToken({ req });
  if (!user) {
    return res.status(401).send('signin required');
  }
  res.send(process.env.PAYPAL_CLIENT_ID || 'AThCgXZqMYsV49_RnrLtGXCycn2p8zC-76ValeT4Wg5v5Cv5XpG0_2llov7UgFlyqWHvkUo5xbF85ejR');
};
export default handler;