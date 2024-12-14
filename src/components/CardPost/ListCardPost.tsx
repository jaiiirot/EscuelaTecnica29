import { useEffect, useState } from "react";
import CardPost from "./CardPost";
interface ListCardPostProps {
  posts: {
    title: string;
    content: string;
    image: string;
    date: string;
  }[];
}
export default function ListCardPost() {
  const [posts, setPosts] = useState<ListCardPostProps["posts"]>([]);
  useEffect(() => {
    const data = async () =>{
        const response = await fetch("https://fakestoreapi.com/products?limit=5");
        const json = await response.json();
        setPosts(json);
    }
    data()
  }, []);
  return(
    <div className="container">
      <div className="row">
        {posts.map((post, index) => (
          <CardPost key={index} {...post} />
        ))}
      </div>
    </div>
  )
}
