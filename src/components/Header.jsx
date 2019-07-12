import React from 'react';
import { Link } from 'react-router-dom';

function Header() {

  return (
    <div>
      <style jsx>{`
        h1 {
          color: white;
          text-align: center;
          font-size: 40px;
        }
      `}</style>
      <div>
        <h1>Help Queue</h1>
        <Link style={{
          textDecoration: 'none',
          color: 'white',
          fontSize: '20px'
        }} to="/">Home</Link> |
        <Link style={{
          textDecoration: 'none',
          color: 'white',
          fontSize: '20px'
        }} to="/newticket">Create Ticket</Link> |
        <Link style={{
          textDecoration: 'none',
          color: 'white',
          fontSize: '20px'
        }} to="/admin">Admin</Link>
        <hr/>
      </div>
    </div>
  );
}

export default Header;
