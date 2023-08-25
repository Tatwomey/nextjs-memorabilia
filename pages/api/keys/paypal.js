import { getToken } from "next-auth/jwt";

const handler = async (req, res) => {
  const user = await getToken({ req });
  if (!user) {
    return res.status(401).send('signin required');
  }
  res.send(process.env.PAYPAL_CLIENT_ID || 'AXqlyJE8Ov4JyYlbICTj7hcXVsIuOzEMvpJEnfxfvNCs23cRdbiONaU5PraD4nB1aoiaGGpGWRAX3s4Q');
};
export default handler;