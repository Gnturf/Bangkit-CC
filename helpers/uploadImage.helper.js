import fs from "fs";
import { Storage } from "@google-cloud/storage";

const storage = new Storage({
    projectId: "projectname",
    keyFilename: "./tanam-pintar-bucket.json",
  });

export const uploadImageToBucket = async (
  bucketName,
  folderName,
  imageFile,
  imageName,
) => {
  try {
    // Uploading Image to Buckets
    const bucket = storage.bucket(bucketName);
    const tempPath = imageFile;
    const destFileName = `${folderName}/${imageName}.jpg`;

    await bucket.upload(tempPath, {
      destination: destFileName,
    });

    fs.unlinkSync(tempPath);

    const uploadedFile = bucket.file(destFileName);
    const publicUrl = `https://storage.googleapis.com/${bucket.name}/${uploadedFile.name}`;

    return {
      status: "success",
      data: {
        image_url: publicUrl,
      },
    };
  } catch (error) {
    fs.unlinkSync(tempPath);
    return {
      status: "failed",
      message: error.message,
    };
  }
};
