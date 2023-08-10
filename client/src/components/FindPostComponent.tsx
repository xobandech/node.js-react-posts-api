import React, { useState } from "react";
import { Post } from "../types/types";

const FindPostComponent = () => {
  const [posts, setPosts] = useState<Post[]>();
  const [searchFormFields, setSearchFormFields] = useState({
    id: "",
    title: "",
    message: "",
  });
  const [editPostFields, setEditPostFields] = useState({
    id: "",
    title: "",
    message: "",
  });
  const [editPostId, setEditPostId] = useState("")
  const searchPosts = async () => {
    await fetch(
      `/posts/search?id=${searchFormFields.id}&title=${searchFormFields.title}&message=${searchFormFields.message}`
    )
      .then((res) => res.json())
      .then((data) => setPosts(data));
  };
  const searchPostsById = async (id: string) => {
    return await fetch(
        `/posts/${id}`
    ).then(res => res.json())
  }

  const editPostById = async ({id, title, message}: Post) => {

  }
  return (
    <div className="m-2">
      <div>
        <div className="flex justify-around w-full">
          <form className="flex flex-col w-1/3 [&>label]:leading-[5px]">
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
          <div className="flex w-1/3 flex-col [&>label]:leading-[5px]">
            <div className="flex ">
              <div>
                <label htmlFor="postToEdit">ID of post to Edit</label>
                <input type="text" onChange={(e) => setEditPostId(e.target.value)} className="outline outline-1 my-2" />
              </div>
              <button className="h-1/2 bg-gray-300 rounded-md px-2 outline outline-1" onClick={() => searchPostsById(editPostId).then(data => setEditPostFields(data))}>
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
            <button className="max-h-[30px] h-[50%] bg-gray-300 rounded-md px-2 outline outline-1 w-1/2 mx-auto">
                Edit
            </button>
          </div>
        </div>
        <button onClick={searchPosts}>Search for post</button>
      </div>
      <textarea
        className="outline outline-1 w-[50%] h-[100%]"
        name="Post"
        disabled
        rows={10}
        value={
          posts
            ? posts.map((post) => {
                return `id: ${post.id.toLocaleString()},
title: ${post.title ? post.title : "undefined"},
message: ${post.message ? post.message : "undefined"}
\n`;
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
