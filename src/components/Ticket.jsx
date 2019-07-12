import React from 'react';
import PropTypes from 'prop-types';

function Ticket(props){
  const ticketInformation =
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
        <h4>{props.formattedWaitTime}</h4>
        <p><em>{props.issue}</em></p>
        <hr/>
      </div>;
    </div>;
  if (props.currentRouterPath === '/admin'){
    return (
      <div onClick={() => {alert('hey, you just clicked the ticket belonging to ' + props.names);}}>
        {ticketInformation}
      </div>
    );
  } else {
    return (
      <div>
        {ticketInformation}
      </div>
    );
  }
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string,
  formattedWaitTime: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string,
  onTicketSelection: PropTypes.func
};

export default Ticket;
