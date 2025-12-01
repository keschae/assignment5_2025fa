import React, { useState, useEffect } from 'react';
import axios from 'axios';

// TODO: Destructure `userId` from props
const PostList = (props) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // TODO: Use useEffect to fetch posts whenever the `userId` prop changes
  // The dependency array should include `userId`

  return (
    <div>
      <h3>Recent Posts</h3>
      {loading && <p>Loading posts...</p>}
      <ul>
        {/* TODO: Use the .map() function to render the list of posts */}
      </ul>
    </div>
  );
};

export default PostList;
