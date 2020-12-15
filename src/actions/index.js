import { types } from './types';
import axios from 'axios';

const URL = 'https://jsonplaceholder.typicode.com/posts?_limit=10';

export const fetchPosts = () => async (dispatch) => {
  try {
    const res = await axios.get(URL);
    dispatch({ type: types.GET_POSTS, payload: res.data });
  } catch(exception) {
    console.log(exception);
  }
};
