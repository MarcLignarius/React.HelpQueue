import React from 'react';
import Ticket from './Ticket';
import PropTypes from 'prop-types';
import Moment from 'moment';

function TicketList(props){
  console.log(props.ticketList);
  return (
    <div>
      {props.ticketList.map((ticket) =>
        <Ticket names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          key={ticket.id}
          timeOpen={ticket.timeOpen}/>
      )}
    </div>
  );
}

function displayTimeOpen(timeOpen) {
  return timeOpen.from(new Moment(), true);
}

TicketList.propTypes = {
  ticketList: PropTypes.array
};

export default TicketList;
