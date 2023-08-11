import React, { useState, useEffect } from "react";
import FindPostComponent from "../components/FindPostComponent";
import { createPost } from "../functions/postFunctions";

const AddPage = () => {
  const [postFields, setPostFields] = useState({
    title: "",
    message: "",
  });

  const [isCanCreate, setIsCanCreate] = useState(false)
  useEffect(() => {
    setIsCanCreate(postFields.title.length > 3 && postFields.message.length > 8);
    console.log(isCanCreate);
    
  }, [postFields])
  

  return (
    <div className="flex ">
      <FindPostComponent />
      <form className="flex sm:ml-10 [&>label]:leading-[5px] flex-col sm:mr-2">
        <label htmlFor="title">Title</label>
        <textarea
          required
          minLength={3}
          onChange={(e) =>
            setPostFields({ ...postFields, title: e.target.value })
          }
          name="title"
          className="outline outline-1 my-2"
          rows={2}
        />
        <label htmlFor="message">Message</label>
        <textarea
          required
          minLength={8}
          onChange={(e) =>
            setPostFields({ ...postFields, message: e.target.value })
          }
          className="outline outline-1 my-2"
          name="message"
          rows={10}
        />
        <p hidden={isCanCreate} className="text-sm">Message lenght must be {">"} 8 chars <br />Title lenght must be {">"} 3 chars</p>

        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            try {
              createPost({
                title: postFields.title,
                message: postFields.message,
              }).then((res) => {
                if (res) {
                }
              });
            } catch (e) {
              console.log(e);
            }
          }}
          disabled={!isCanCreate}
          className="bg-gray-300 rounded-md my-auto ml-4 px-2 outline outline-1"
        >
          Create post
        </button>
      </form>
    </div>
  );
};

export default AddPage;
