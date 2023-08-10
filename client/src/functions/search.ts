import { Post } from "../types/types";

export const searchPostsById = async (id: string) => {
  return await fetch(`/posts/${id}`).then((res) => res.json());
};

export const editPostById = async ({ id, title, message }: Post) => {};

export const searchPosts = async ({ id, title, message }: Post) => {
  return await fetch(
    `/posts/search?id=${id ? id : ""}&title=${title}&message=${message}`
  ).then((res) => res.json());
};
