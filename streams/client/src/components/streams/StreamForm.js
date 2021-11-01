import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className='ui error message'>
          <div className='header'>{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `
      field ${meta.touched && meta.error && 'error'}
    `;

    return (
      <div className={className}>
        <label className=''>{label}</label>

        <input {...input} autoComplete='off' />

        {this.renderError(meta)}
      </div>
    );
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.props.onSubmit)}
        className='ui form'
      >
        <Field name='title' component={this.renderInput} label='Enter title' />
        <Field
          name='description'
          component={this.renderInput}
          label='Enter description'
        />
        <button type='submit' className='ui button primary'>
          Submit
        </button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = 'You must enter a title';
  }

  if (!formValues.description) {
    errors.description = 'You must enter a title';
  }

  return errors;
};

export default reduxForm({
  form: 'streamForm',
  validate
})(StreamForm);
