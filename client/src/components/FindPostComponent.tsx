import React, { useState } from "react";
import { Post } from "../types/types";
import {
  searchPosts,
} from "../functions/search";

const FindPostComponent = () => {
  const [posts, setPosts] = useState<Post[]>();
  const [searchFormFields, setSearchFormFields] = useState({
    id: "",
    title: "",
    message: "",
  });

  return (
    <div className="m-2 sm:w-1/3">
      <div>
        <div className="">
          <form className="flex flex-col [&>label]:leading-[5px]">
            <label htmlFor="id">Id</label>
            <input
              type="text"
              className="outline outline-1 my-2"
              placeholder="Search"
              onChange={(e) =>
                setSearchFormFields({ ...searchFormFields, id: e.target.value })
              }
            />
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="outline outline-1 my-2"
              placeholder="Search"
              onChange={(e) =>
                setSearchFormFields({
                  ...searchFormFields,
                  title: e.target.value,
                })
              }
            />
            <label htmlFor="message">Message</label>
            <input
              type="text"
              className="outline outline-1 my-2"
              placeholder="Search"
              onChange={(e) =>
                setSearchFormFields({
                  ...searchFormFields,
                  message: e.target.value,
                })
              }
            />
          </form>
        </div>
        <button
        className="bg-gray-300 rounded-md px-2 outline outline-1 mb-2"
          onClick={() =>
            searchPosts({
              id: +searchFormFields.id,
              title: searchFormFields.title,
              message: searchFormFields.message,
            }).then((posts) => setPosts(posts))
          }
        >
          Search for posts
        </button>
      </div>
      <textarea
        className="outline outline-1 w-full h-[100%]"
        name="Post"
        disabled
        rows={10}
        value={
          posts
            ? posts.map((post) => {
                return `{
    id: ${post.id.toLocaleString()},
    title: ${post.title ? post.title : "undefined"},
    message: ${post.message ? post.message : "undefined"}
}\n`;
              })
            : `Post not found
{
    id: undefined,
    title: undefined,
    message: undefined,
}`
        }
      />
    </div>
  );
};

export default FindPostComponent;
