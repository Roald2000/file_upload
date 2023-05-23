import express from "express";
import cors from "cors";
import multer from "multer";
import fs from "fs";
import path from "path";

const TEST_PORT = 3301;

const upload = multer({ dest: "./uploads" });

const app = express();

app.use(cors());

app.post("/api/uploads", upload.single("file"), (req, res, next) => {
  try {
    const file = req.file;
    const fileName = req.body.name;
    const filePath = file.path;

    if (!file) {
      throw new Error("No File Uploaded").status(400);
    }

    // Modify the filename
    const modifiedFileName = `ownerid0_postid_${Date.now()}_${
      file.originalname
    }`;

    // Get the new file path
    const newFilePath = path.join(path.dirname(filePath), modifiedFileName);

    // Rename the file
    fs.rename(filePath, newFilePath, (err) => {
      if (err) {
        throw err;
      }

      res.status(201).json({
        success: true,
        message: "File Uploaded!",
        filePath: newFilePath,
        fileName: modifiedFileName,
      });
    });
  } catch (error) {
    next(error);
  }
});

app.use((err, req, res, next) => {
  const errMessage = err.message || "Internal Server Error";
  const errStatusCode = err.status || 500;
  res.status(errStatusCode).send({
    success: false,
    status: errStatusCode,
    message: errMessage,
  });
});

app.listen(TEST_PORT, () => console.log(`File Uploads @ ${TEST_PORT}`));
