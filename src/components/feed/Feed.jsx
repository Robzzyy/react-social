import React from 'react';
import Post from '../post/Post';
import Share from '../share/Share';
import "./feed.css";

export default function Feed() {
  return (
    <div className="feed">Feed
    <div className="feedWrapper">
       <Share/>
       <Post/>
    </div>
    </div>
  )
}
