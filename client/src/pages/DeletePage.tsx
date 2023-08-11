import { useState } from "react";
import FindPostComponent from "../components/FindPostComponent";
import { deletePost } from "../functions/postFunctions";

const DeletePage = () => {
  const [postId, setPostId] = useState("");
  return (
    <div>
      <FindPostComponent />
      <div className="flex flex-col items-left max-w-[200px]">
        <label className="">Id of post to Delete</label>
        <input
          className="outline outline-1 my-2"
          onChange={(e) => setPostId(e.target.value)}
          type="number"
        />
        <button
          className="bg-gray-300 rounded-md my-auto max-w-[70%] px-2 outline outline-1"
          disabled={postId.length <= 0}
          onClick={() => deletePost(postId)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
export default DeletePage;
