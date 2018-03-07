import React from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import Login from './components/Login';
import Welcome from './components/Welcome';
import './App.css';

export default class App extends React.Component {
	constructor() {
		super();
		this.state = {
			name: '',
			active: 0
		}
	}
	changeName = name => this.setState({name})
	changeActive = active => this.setState({active})
  render = () =>
  



    <div className ="col-md-8 col-md-offset-2">
      <nav className="navbar navbar-default">
			<ul className="nav nav-pills">
				<li className="nav-item">
					<Link to='/login' onClick={() => this.changeActive(0)} className={`nav-link ${this.state.active === 0 ? 'active' : ''}`}>Login</Link>
				</li>
				<li className="nav-item">
					<Link to='/Welcome'
						onClick={() => this.changeActive(1)} className={`nav-link ${this.state.active === 1 ? 'active' : ''}`} >Welcome</Link>
				</li>
      </ul>
      </nav>
      



			<div id="display">
				<Route path='/' render={() => <Redirect to='/login'/>}/>
				<Route path='/login' render={() => <Login changeActive={this.changeActive.bind(this)} changeName={this.changeName.bind(this)}/>}/>
				<Route path='/Welcome' render={() => <Welcome name={this.state.name}/>}/>				
			</div>
		</div>
}
