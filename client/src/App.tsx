import React, { useEffect, useState } from "react";
import { Post } from "./types/types"
import PostComponent from "./components/PostComponent.tsx";

function App() {
  const [posts, setPosts] = useState<Post[]>([])
  useEffect(() => {
    const fetchPosts = async () => {
      try { 
        const response = await fetch("/posts")
        const posts = await response.json();
        setPosts(posts)
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    
    fetchPosts();
  }, []);

  return (
    <div className="">
      {posts && posts.map(post => {
        return <PostComponent post={post} />
      })}
    </div>
  );
}

export default App;
