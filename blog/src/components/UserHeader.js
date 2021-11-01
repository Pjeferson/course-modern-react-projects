import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchUser } from '../actions';

const UserHeader = ({ userId, fetchUser, user }) => {
  useEffect(() => {
    fetchUser(userId);
  }, []);

  return user ? <div className='header'>{user.name}</div> : null;
};

const mapStateToProps = (state, props) => ({
  user: state.users[props.userId]
});

export default connect(mapStateToProps, { fetchUser })(UserHeader);
