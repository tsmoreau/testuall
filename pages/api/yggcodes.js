// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { connectToDatabase } = require("../../lib/mongodb");
const ObjectId = require("mongodb").ObjectId;

export default async function handler(req, res) {
  // switch the methods
  switch (req.method) {
    case "GET": {
      return getCodes(req, res);
    }

    case "POST": {
      return addCode(req, res);
    }

    case "PUT": {
      return redeemCode(req, res);
    }

    case "DELETE": {
      return deleteCode(req, res);
    }
  }
}

// Getting all posts.
async function getCodes(req, res) {
  try {
    let { db } = await connectToDatabase();
    let posts = await db
      .collection("yggcodes")
      .find({})
      .sort({ redeemed: -1 })
      .toArray();
    return res.json({
      message: JSON.parse(JSON.stringify(posts)),
      success: true
    });
  } catch (error) {
    return res.json({
      message: new Error(error).message,
      success: false
    });
  }
}

// Adding a new post
async function addCode(req, res) {
  try {
    let { db } = await connectToDatabase();
    await db.collection("yggcodes").insertOne(JSON.parse(req.body));
    return res.json({
      message: "Code Added Successfully",
      success: true
    });
  } catch (error) {
    return res.json({
      message: new Error(error).message,
      success: false
    });
  }
}

// Updating a post
async function redeemCode(req, res) {
  try {
    let { db } = await connectToDatabase();

    await db.collection("posts").updateOne(
      {
        _id: new ObjectId(req.body)
      },
      { $set: { redeemed: true } }
    );

    return res.json({
      message: "Code redeemed successfully",
      success: true
    });
  } catch (error) {
    return res.json({
      message: new Error(error).message,
      success: false
    });
  }
}

// deleting a post
async function deleteCode(req, res) {
  try {
    let { db } = await connectToDatabase();

    await db.collection("yggcodes").deleteOne({
      _id: new ObjectId(req.body)
    });

    return res.json({
      message: "Code deleted successfully",
      success: true
    });
  } catch (error) {
    return res.json({
      message: new Error(error).message,
      success: false
    });
  }
}
