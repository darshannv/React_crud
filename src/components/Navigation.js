import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import logo from '../static/logo.png';
import "../App.css";

import {
  CDBSidebar,
  CDBSidebarHeader,
  CDBSidebarMenuItem,
  CDBSidebarContent,
  CDBSidebarMenu,
  CDBSidebarSubMenu,
  CDBSidebarFooter,
  CDBBadge,
  CDBContainer,
  CDBSidebarCTA,
} from 'cdbreact';
import {NavLink} from 'react-router-dom';

const Navigation = () => {
return (
    <div>
       <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand className="app-logo" href="/">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-center"
            />{' '}
            Student Management Application
          </Navbar.Brand>
      </Navbar>
      <div className="sidebar">
       <CDBSidebar textColor="#333" backgroundColor="#f0f0f0">
        <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>Navigation</CDBSidebarHeader>
        <CDBSidebarContent>
          <CDBSidebarMenu>
          <NavLink exact to="/" activeClass="activeClassClicked">
            <CDBSidebarMenuItem icon="home" iconSize="lg">
              Home
            </CDBSidebarMenuItem>
            </NavLink>
             <NavLink exact to="/students" activeClass="activeClassClicked">
            <CDBSidebarMenuItem icon="list" iconSize="sm">
              Student List
            </CDBSidebarMenuItem>
             </NavLink>
             <NavLink exact to="/manage" activeClass="activeClassClicked">
            <CDBSidebarMenuItem icon="user" iconType="solid" textFontSize="14px">
              Manage Students
            </CDBSidebarMenuItem>
             </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
      </div>
    </div>

);
}

export default Navigation;