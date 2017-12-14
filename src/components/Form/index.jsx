import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Component extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form onSubmit={this.submitHandler} className='data-form'>
        <div className="data-form__item">
          <label htmlFor="">ФИО</label>
          <input type="text" placeholder/>
        </div>
      </form>
    );
  }
}

Component.propTypes = {

};

export default Component;
