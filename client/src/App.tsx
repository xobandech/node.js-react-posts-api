import React, { useEffect, useState } from "react";
type Post = {
  id: number;
  title: string;
  message: string;
};
function App() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/posts");
        const posts = await response.json();
        setPosts(posts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return <div>
    {posts && posts.map((post) => {
      return <div>
        <h3>{post.title}</h3>
        <p>{post.message}</p>
      </div>
    })}
    </div>;
}

export default App;
