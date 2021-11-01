import jsonPlaceholder from '../api/jsonPlaceholder';

export const fetchPosts = () => async (dispatch, _getState) => {
  const response = await jsonPlaceholder.get('/posts');

  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = (id) => async (dispatch, getState) => {
  if (getState().users[id]) return;

  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: 'FETCH_USER', payload: response.data });
};
