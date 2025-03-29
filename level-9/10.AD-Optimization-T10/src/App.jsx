import React, { useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPosts = async () => {
  const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return data;
};

const PostItem = React.memo(({ post, onClick }) => {
  return (
    <li 
      onClick={() => onClick(post.id)} 
      style={{ cursor: "pointer", padding: "10px", borderBottom: "1px solid #ccc", listStyle: "none" }}
    >
      {post.title}
    </li>
  );
});

const PostsList = () => {
  const { data, isLoading, isError, error } = useQuery({ queryKey: ["posts"], queryFn: fetchPosts });

  const handleClick = useCallback((id) => {
    alert(`Post ID: ${id}`);
  }, []);

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto", background: "#f9f9f9", borderRadius: "10px" }}>
      <h2>Posts List</h2>
      <ul style={{ padding: 0 }}>
        {data.slice(0, 10).map((post) => (
          <PostItem key={post.id} post={post} onClick={handleClick} />
        ))}
      </ul>
    </div>
  );
};

export default PostsList;
