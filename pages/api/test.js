import { connectToDatabase } from "../../util/mongodb";
export default async (req, res) => {
  const { db } = await connectToDatabase();
  switch (req.method) {
    case "GET":
      const users = await db
        .collection("yggcodes")
        .find({})
        .limit(20)
        .toArray();

      res.json({ status: 200, data: users });
      break;
  }
};
