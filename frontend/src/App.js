import React from 'react';

import axios from './axios';

function App() {
  async function getPosts(event) {
    // async function getUser() {
    try {
      const response = await axios.get('/feed/posts');
      console.log(response);
    } catch (error) {
      console.error(error);
    }
    // }
  }

  async function createPost(params) {
    try {
      const response = await axios.post('/feed/post', {
        title: 'test',
        content: 'test content'
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div>
      <button onClick={() => getPosts()}>Get Posts</button>
      <button onClick={() => createPost()}>Create a Post</button>
    </div>
  );
}

export default App;
