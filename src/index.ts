import connectDB from "@utils/database";
import express from "express";
import router from "./routes/food.route";
import cors from "cors";

const PORT = process.env.PORT || 4000;

async function init() {
  try {
    const db = await connectDB();
    console.log(`Database Status : ${db}`);
    const app = express();

    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use("/foods", router);

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

init();
