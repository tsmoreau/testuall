import { connectToDatabase } from "../util/mongodb";

export async function getServerSideProps() {
  const { db } = await connectToDatabase();

  const codes = await db.collection("yggcodes").find({}).limit(20).toArray();

  let res = await fetch("http://localhost:3000/api/test", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  });
  res = await res.json();
  console.log("test");
  console.log(res);
  return {
    props: {
      codes: JSON.parse(JSON.stringify(codes)),
      res: res.data
    }
  };
}

export default function Posts({ codes, res }) {
  console.log("OG CALL");
  console.log(codes);
  console.log("API CALL");
  console.log(res);
  return (
    <div>
      <h1 className="mb-4">Codes</h1>

      <ul>
        {codes.map((code) => (
          <li className="mb-4">
            <h2>{code.code}</h2>
            <p>{code.redeemed}</p>
            <p>{code.redeemedBy}</p>
            <p>{code.redeemedAt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
