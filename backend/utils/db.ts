import mongoose from "mongoose";
// mongodb+srv://nariman:narik85@cluster0.hsiq3wg.mongodb.net/?retryWrites=true&w=majority
mongoose
  .connect(
    "mongodb://localhost:27017/ecommercy"
  )
  .then(() => console.log("Database connect....!"))
  .catch((e) => console.log(e));

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error"));

export { db, mongoose };
