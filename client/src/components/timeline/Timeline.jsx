import "./timeline.css";
import Distribute from "../distribute/Distribute";
import Contribute from "../contribute/Contribute";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

export default function Timeline({ username }) {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get("/posts/profile/" + username)
        : await axios.get("posts/timeline/" + user._id);
      setPosts(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    };
    fetchPosts();
  }, [username, user._id]);
  return (
    <div className="timeShroud">
      <div className="timeCloak">
      {(!username || username === user.username) && <Distribute />}
        {posts.map((p) => (
          <Contribute key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
}
