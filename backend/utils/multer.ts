import multer from "multer";
const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "upload");
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    cb(
      null,
      `product/${
        file.originalname.split(".")[0]
      }.${ext}`
    );
  },
});
export const upload =  multer({
  storage: multerStorage,
});


