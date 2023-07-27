import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
export default function connectDb() {
  // console.log("ldkfjal", process.env.DATABASE);
  const uri = process.env.DATABASE.replace(
    "<PASSWORD>",
    process.env.DATABASE_PASSWORD
  );

  // mongoose
  //   .connect(process.env.DATABASE_URI, {
  //     useNewUrlParser: true,
  //     useUnifiedTopology: true,
  //   })
  //   .then(() => console.log("Connected Successfully"))
  //   .catch((err) => {
  //     console.error(err);
  //   });

  mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((conn) => console.log("all well"))
    .catch((err) => console.log(err));
}
