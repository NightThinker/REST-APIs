import axios from 'axios';

// export default axios.create({
//   baseURL: `http://localhost:8080`,
//   headers: { 'content-type': 'application/json' }
// });

axios.defaults.baseURL = 'http://localhost:8080';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/json';

export default axios;
