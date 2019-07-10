import React from 'react';
import PropTypes from 'prop-types';

function Ticket(props) {
  return (
    <div>
      <style jsx>{`
        .color-toggle {
          background-color: grey;
          padding-left: 10%;
          padding-right: 10%;
          padding-top: 1%;
        }
        .color-toggle:hover {
          background-color: lightgrey;
        }
      `}</style>
      <div className="color-toggle">
        <h3>{props.location} - {props.names}</h3>
        <h4>{displayTimeOpen(props.timeOpen)} ago</h4>
        <p><em>{props.issue}</em></p>
        <br/>
      </div>
      <hr/>
    </div>
  );
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string,
  timeOpen: PropTypes.instanceOf(Moment).isRequired
};

export default Ticket;
