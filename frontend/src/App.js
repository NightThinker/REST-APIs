import React from 'react';
import axios from 'axios';

function App() {
  async function getPosts(event) {
    console.log('getPosts');
    // async function getUser() {
    try {
      const response = await axios.get('http://localhost:8080/feed/posts');
      console.log(response);
    } catch (error) {
      console.error(error);
    }
    // }
  }

  function createPost(params) {}
  return (
    <div>
      <button onClick={() => getPosts()}>Get Posts</button>
      <button onClick={() => createPost()}>Create a Post</button>
    </div>
  );
}

export default App;
