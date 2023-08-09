import React, { useState } from "react";
import { Post } from "../types/types";
const FindPostComponent = () => {
  const [post, setPost] = useState<Post>();
  const [searchField, setSearchField] = useState("");
  
  return (
    <div className="m-2">
      <div>
        <input type="text" className="outline w-[50%] outline-1 my-2" placeholder="Search" onChange={(e) => setSearchField(e.target.value)} />
        {/* <button onClick={findPostById}>Search for post</button> */}
      </div>
      <textarea
        className="outline outline-1 w-[50%] h-[100%]"
        name="Post"
        placeholder={`${!post && "Post not found"}
{
    id: ${post?.id}
    title: ${post?.title}
    message: ${post?.message}
}`}
      />
    </div>
  );
};

export default FindPostComponent;
