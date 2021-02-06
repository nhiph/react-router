import React from 'react';
import { Link, Route } from 'react-router-dom';

const menus = [
  {
    name : 'Home',
    to : '/',
    exact : true
  },
  {
    name : 'About',
    to : '/About',
    exact : false
  },
  {
    name : 'Home',
    to : '/Contact',
    exact : false
  },
]

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
      var active = match ? 'active' : '';
      return (
        <li className="active mr-5">
          <Link to={to} className="my-link">
          {label}
          </Link>
        </li>
      )
    }}/>
  )
}

function Menu() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            { showMenu(menus) }  
          </ul>
          </div>
      </nav>
      </div>
    );
}

const showMenu = (menus) => {
  var result = null;
  if(menus.length > 0){
    result = menus.map((menu, index) => {
      return (
        <MenuLink 
        key={index} 
        label={menu.name} 
        to={menu.to} 
        activeOnlyWhenExact={menu.exact}
      />
      );
    })
  }
}

export default Menu;
