import multer, { StorageEngine } from "multer";
import { Request } from "express";

const storage: StorageEngine = multer.diskStorage({
  filename: (req: Request, file: Express.Multer.File, cb) => {
    cb(null, file.originalname);
  },
});

const fileFilter = (req: Request, file: Express.Multer.File, cb: any) => {
  const allowedFormats = ["image/jpeg", "image/png", "image/jpg"];

  if (allowedFormats.includes(file.mimetype)) {
    cb(null, true);
  } else {
    const error = new Error("Only JPEG, PNG, and JPG are allowed.") as Error & {
      statusCode?: number;
    };
    error.statusCode = 400;
    cb(error, false);
  }
};

const upload = multer({
  storage,
  fileFilter,
});

export default upload;
