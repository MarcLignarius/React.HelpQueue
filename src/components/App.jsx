import React from 'react';
import Header from './Header';
import TicketList from './TicketList';
import NewTicketControl from './NewTicketControl';
import Admin from './Admin';
import Error404 from './Error404';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import constants from './../constants';
const { c } = constants;
import * as actions from './../actions';
import Moment from 'Moment';

class App extends React.Component {

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateTicketElapsedWaitTime(),
    60000
    );
  }

  componentWillMount() {
    const { dispatch } = this.props;
    const { watchFirebaseTicketsRef } = actions;
    dispatch(watchFirebaseTicketsRef());
  }

  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTimer);
  }

  updateTicketElapsedWaitTime() {
    const { dispatch } = this.props;
    Object.keys(this.props.masterTicketList).map(ticketId => {
      const ticket = this.props.masterTicketList[ticketId];
      const newFormattedWaitTime = new Moment(ticket.timeOpen).from(new Moment());
      const action = {
        type: c.UPDATE_TIME,
        id: ticketId,
        formattedWaitTime: newFormattedWaitTime
      };
      dispatch(action);
    });
  }

  render(){
    return (
      <div>
        <style global jsx>{`
        body {
          background-color: #3D3A39;
          color: white
        }
        body::after {
          content: "";
          background: url("https://static1.squarespace.com/static/5524448ee4b0d6f6b83ab9e2/t/56f32109859fd0cad67fe1e1/1458774289324");
          background-size: cover;
          opacity: 0.2;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          position: absolute;
          z-index: -1;
        }
      `}</style>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=>
            <TicketList
              ticketList={this.props.masterTicketList}
            />}
          />
          <Route path='/newticket' render={()=>
            <NewTicketControl/>}
          />
          <Route path='/admin' render={(props)=>
            <Admin
              currentRouterPath={props.location.pathname}
            />}
          />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    masterTicketList: state.masterTicketList
  };
};

App.propTypes = {
  masterTicketList: PropTypes.object
};

export default withRouter(connect(mapStateToProps)(App));
