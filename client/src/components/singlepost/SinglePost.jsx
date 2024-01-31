import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./singlepost.css";

export default function Singlepost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});

  //Get single post of user by id
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("http://localhost:5000/api/posts/" + path);
      setPost(res.data);
    };
    getPost();
  }, [path]);

  

  return (
    <div className='singlepost'>
        <div className="singlePostWrapper">
        {post.photo && (
          <img
          className="singlePostImg"
          src={post.photo}
          alt=""
          />
        )}
        <h1 className="singlePostTitle">
          { post.title }
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt" ></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <Link to={`/?user=${post.username}`} className="link">
              <b> {post.username}</b>
            </Link>
          </span>
          <span>{new Date(post.createdAt).toDateString() }</span>
        </div>
        <p className="singlePostDesc">
          { post.desc }
        </p>
        </div>
    </div>
  )
}
