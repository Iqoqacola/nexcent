import { useEffect } from "react";
import { useState } from "react";

export const Form = () => {
  const [postImage, setPostImage] = useState("");
  const getData = async () => {
    const response = await fetch("http://localhost:4000/api/car", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ pathh: postImage }),
    });
    const json = await response.json();

    console.log(json);
  };

  useEffect(() => {
    console.log(postImage);
  }, [postImage]);

  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept=".jpeg, .png, .jpg"
          onChange={(e) => {
            setPostImage(e.target.value);
          }}
        />

        <button>Upload</button>
      </form>

      {/* {postImage && <img src={postImage.myFile} />} */}
    </>
  );
};

function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
}
