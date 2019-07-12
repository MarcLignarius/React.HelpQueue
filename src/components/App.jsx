import React from 'react';
import Header from './Header';
import TicketList from './TicketList';
import NewTicketControl from './NewTicketControl';
import Admin from './Admin';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterTicketList: [],
      selectedTicket: null
    };
    this.handleAddingNewTicketToList = this.handleAddingNewTicketToList.bind(this);
    this.handleChangingSelectedTicket = this.handleChangingSelectedTicket.bind(this);
  }

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateTicketElapsedWaitTime(),
    60000
    );
  }

  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTimer);
  }

  componentWillReceiveProps() {}

  shouldComponentUpdate() {}

  componentWillUpdate() {}

  componentDidUpdate() {}

  updateTicketElapsedWaitTime() {
    let newMasterTicketList = this.state.masterTicketList.slice();
    newMasterTicketList.forEach((ticket) =>
      ticket.formattedWaitTime = (ticket.timeOpen).fromNow(true)
    );
    this.setState({masterTicketList: newMasterTicketList});
  }

  handleAddingNewTicketToList(newTicket){
    var newMasterTicketList = this.state.masterTicketList.slice();
    newTicket.formattedWaitTime = (newTicket.timeOpen).fromNow(true);
    newMasterTicketList.push(newTicket);
    this.setState({masterTicketList: newMasterTicketList});
  }

  handleChangingSelectedTicket(ticket){
  this.setState({selectedTicket: ticket});
  alert('The selected ticket is now: ' + this.state.selectedTicket.names);
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
          <Route exact path='/' render={()=><TicketList ticketList={this.state.masterTicketList} />} />
          <Route path='/newticket' render={()=><NewTicketControl onNewTicketCreation={this.handleAddingNewTicketToList} />} />
          <Route path='/admin' render={(props)=><Admin ticketList={this.state.masterTicketList} currentRouterPath={props.location.pathname}
          onTicketSelection={this.handleChangingSelectedTicket}/>} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }

}

export default App;
