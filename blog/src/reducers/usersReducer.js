export default (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_USER':
      const user = action.payload;

      return { ...state, [user.id]: user };

    default:
      return state;
  }
};
