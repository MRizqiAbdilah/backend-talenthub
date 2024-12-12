import connectDB from "@utils/database";
import express from "express";
import router from "./routes/food.route";
import cors from "cors";

async function init() {
  try {
    const db = await connectDB();
    console.log(`Database Status : ${db}`);
    const app = express();

    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    const PORT = 3000;

    app.get("/", (req, res) => {
      res.status(200).json({
        message: "Server is running",
        data: null,
      });
    });

    app.use("/foods", router);

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

init();
