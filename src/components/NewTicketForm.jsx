import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import { connect } from 'react-redux';

function NewTicketForm(props){
  let _names = null;
  let _location = null;
  let _issue = null;

  function handleNewTicketFormSubmission(event) {
  const { dispatch } = props;
  event.preventDefault();
  const action = {
    type: 'ADD_TICKET',
    id: null,
    names: _names.value,
    location: _location.value,
    issue: _issue.value,
    timeOpen: new Moment()
  };
  dispatch(action);
  props.onNewTicketCreation({names: _names.value, location: _location.value, issue: _issue.value, id: v4(), timeOpen: new Moment()});
  _names.value = '';
  _location.value = '';
  _issue.value = '';
}

  return (
    <div>
      <style jsx>{`
        input {
          display: inline-block;
          vertical-align: baseline;
          margin-bottom: 5px;
        }
      `}</style>
      <form onSubmit={handleNewTicketFormSubmission}>
        <input
          type='text'
          id='names'
          placeholder='Pair Names'
          ref={(input) => {_names = input;}}/>
        <br/>
        <input
          type='text'
          id='location'
          placeholder='Location'
          ref={(input) => {_location = input;}}/>
        <br/>
        <textarea
          rows="5"
          cols="80"
          id='issue'
          placeholder='Describe your issue.'
          ref={(input) => {_issue = input;}}/>
        <br/>
        <button type='submit'>Help!</button>
      </form>
    </div>
  );
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default connect()(NewTicketForm);
