import { Post } from "../types/types";

export const searchPostsById = async (id: string) => {
  return await fetch(`/posts/${id}`).then((res) => res.json());
};

export const editPostById = async ({ id, title, message }: Post) => {
  try {
    const response = await fetch(
      `/posts/edit?id=${id}&title=${title}&message=${message}`,
      {
        method: "PATCH",
      }
    );

    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Edit post request failed");
    }
  } catch (error) {
    console.error("An error occurred while editing the post:", error);
    throw error;
  }
};

export const deletePost = async (id: string) => {
  try {
    const response = await fetch(`/posts?id=${id}`, { method: "DELETE" });

    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Delete post request failed");
    }
  } catch (error) {
    console.error("An error occurred while deleting the post:", error);
    throw error;
  }
};

export const createPost = async ({ title, message }: Post) => {
  try {
    const response = await fetch(`/posts?title=${title}&message=${message}`, {
      method: "POST",
    });

    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Create post request failed");
    }
  } catch (error) {
    console.error("An error occurred while creating the post:", error);
    throw error;
  }
};

export const searchPosts = async ({ id, title, message }: Post) => {
  try {
    const response = await fetch(
      `/posts/search?id=${id ? id : ""}&title=${title}&message=${message}`
    );

    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Search posts request failed");
    }
  } catch (error) {
    console.error("An error occurred while searching for posts:", error);
    throw error;
  }
};
