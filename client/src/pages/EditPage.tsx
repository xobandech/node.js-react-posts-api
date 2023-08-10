import React, { useState } from "react";
import FindPostComponent from "../components/FindPostComponent";
import { searchPostsById, editPostById } from "../functions/search";

const EditPage = () => {
  const [editPostFields, setEditPostFields] = useState({
    id: "",
    title: "",
    message: "",
  });
  const [editPostId, setEditPostId] = useState("");

  return (
    <div className="sm:flex">
      <FindPostComponent />
      <div className="flex sm:w-1/3 m-2 flex-col [&>label]:leading-[5px]">
        <div className="flex ">
          <div>
            <label htmlFor="postToEdit">ID of post to Edit</label>
            <input
              type="text"
              value={editPostId}
              onChange={(e) => setEditPostId(e.target.value)}
              className="outline outline-1 my-2"
            />
          </div>
          <button
            className="h-1/2 bg-gray-300 rounded-md px-2 outline outline-1"
            onClick={async () => {
              await searchPostsById(editPostId).then((data) =>
                setEditPostFields(data)
              );
              setEditPostId("");
            }}
          >
            Search
          </button>
        </div>

        <label htmlFor="id">Id</label>
        <input
          type="text"
          className="outline outline-1 my-2"
          disabled
          value={editPostFields.id}
        />
        <label htmlFor="title">Title</label>
        <textarea
          rows={2}
          className="outline outline-1 my-2"
          value={editPostFields.title}
          onChange={(e) =>
            setEditPostFields({ ...editPostFields, title: e.target.value })
          }
        />
        <label htmlFor="message">Message</label>
        <textarea
          rows={3}
          className="outline outline-1 my-2"
          value={editPostFields.message}
          onChange={(e) =>
            setEditPostFields({
              ...editPostFields,
              message: e.target.value,
            })
          }
        />
        <button
          onClick={() =>
            editPostById({
              id: +editPostFields.id,
              title: editPostFields.title,
              message: editPostFields.message,
            })
          }
          className="max-h-[30px] h-[50%] bg-gray-300 rounded-md px-2 outline outline-1 w-1/2 mx-auto"
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default EditPage;
