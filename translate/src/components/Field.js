import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {
  render() {
    const { language } = this.context;
    const text = language === 'english' ? 'Name' : 'Naam';

    return (
      <div className='ui field'>
        <label>{text}</label>
        <input />
      </div>
    );
  }
}

Field.contextType = LanguageContext;

export default Field;
