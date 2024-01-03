import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storageImgs } from "./config";
import { v4 } from "uuid";

export default async function uploadImgToStorage(file) {
  try {
    const storageRef = ref(storageImgs, v4());
    await uploadBytes(storageRef, file);
    const resUpImage = await getDownloadURL(storageRef);
    return resUpImage;
  } catch (error) {
    throw new Error("Failed Charge Image");
  }
}
