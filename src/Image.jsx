import { useState } from "react";
import { storage } from "./firebase";

const Image = () => {
  const [joinImage, setJoinImage] = useState("");
  const onFileChange = async (e) => {
    const file = e.target.files[0];
    const storageRef = storage.ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setJoinImage(await fileRef.getDownloadURL());
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(joinImage);
  };
  return (
    <form onSubmit={onSubmit}>
      <label className="m-0 mt-1" htmlFor="profile">
        Profile
      </label>
      <input onChange={onFileChange} type="file" name="profile" />
      <button type="submit" value="upload">
        Upload
      </button>
    </form>
  );
};
export default Image;
