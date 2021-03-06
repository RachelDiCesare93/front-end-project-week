import React, {Component} from 'react';
import {Route, NavLink,} from 'react-router-dom';
import NewNoteForm from './NewNoteForm';
import './Sidebar.css';


class Sidebar extends Component {
    render(){
    return ( 
        <div className="sidebar-container">
            <ul className="nav-bar">
        <div className="nav">
       <h1 className="title">Lambda Notes</h1>
       <NavLink exact to="/" className="nav-text" activeClassName="active-component"><li><i class="far fa-sticky-note"></i> View Your Notes</li> </NavLink>
        <NavLink to="/create-new-note/" className="nav-text" activeClassName="active-component"> <li><i class="fas fa-pencil-alt"></i> Create New Note</li></NavLink>
         </div>
            </ul>
    </div>
        );
    }
}
 

export default Sidebar;