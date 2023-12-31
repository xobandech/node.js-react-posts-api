import { Post } from "../types/types";

const PostComponent = ({ post }: { post: Post }) => {
  return (
    <div key={post.id} id={post.id?.toLocaleString()} className="outline outline-1 w-1/3 m-2 min-w-[350px]">
      <h3 className="font-bold">{post.title}</h3>
      <p>{post.message}</p>
      <p className="text-sm text-gray-400">{post.id}</p>
    </div>
  );
};

export default PostComponent;
