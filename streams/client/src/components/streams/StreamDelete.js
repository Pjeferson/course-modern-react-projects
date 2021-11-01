import React from 'react';
import { connect } from 'react-redux';

import Modal from '../Modal';
import history from '../../history';
import { fetchStream, deleteStream } from '../../actions';

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onModalClose() {
    history.push('/');
  }

  onConfirm = () => {
    this.props.deleteStream(this.props.match.params.id);
  };

  renderActions() {
    return (
      <>
        <button onClick={this.onConfirm} className='ui button negative'>
          Delete
        </button>
        <button onClick={this.onModalClose} className='ui button'>
          Cancel
        </button>
      </>
    );
  }

  renderContent() {
    if (!this.props.stream) {
      return 'Are you sure you want to delete this stream?';
    }

    return `Are you sure you want to delete the stream with title: \
      ${this.props.stream.title}?`;
  }

  render() {
    return (
      <Modal
        title='Delele Stream'
        content={this.renderContent()}
        onDismiss={this.onModalClose}
        actions={this.renderActions()}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  };
};

export default connect(mapStateToProps, {
  fetchStream,
  deleteStream
})(StreamDelete);
