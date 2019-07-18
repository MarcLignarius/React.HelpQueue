import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

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
        }} to="/"><button>Home</button></Link>
      <div className={'divider'}></div>
        <Link style={{
          textDecoration: 'none',
          color: 'white',
          fontSize: '20px'
        }} to="/newticket"><button>Create Ticket</button></Link>
        <div className={'divider'}></div>
        <Link style={{
          textDecoration: 'none',
          color: 'white',
          fontSize: '20px'
        }} to="/admin"><button>Admin</button></Link>
        <hr/>
      </div>
    </div>
  );
}

export default Header;
