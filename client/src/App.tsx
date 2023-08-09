import React, { useEffect, useState } from "react";
import { Post } from "./types/types"

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
      Post page
    </div>
  );
}

export default App;
