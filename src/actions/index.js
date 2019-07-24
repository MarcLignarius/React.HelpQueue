import constants from './../constants';
const { firebaseConfig } = constants;

firebase.initializeApp(firebaseConfig);
const tickets = firebase.database().ref('tickets');

export function addTicket(_names, _location, _issue) {
  return () => tickets.push({
    names: _names,
    location: _location,
    issue: _issue,
    timeOpen: new Date().getTime()
  });
}

export function watchFirebaseTicketsRef() {
    return function(dispatch) {
      tickets.on('child_added', data => {
        console.log(data.val());
      });
    };
  }