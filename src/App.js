import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import getDataFromServer from './HttpClient/RestClient';
import DataTable from './common/DataTable';

class App extends Component {
  constructor(){
    super()
    this.state = {
      usersList : [],
      addUserFlag : false,
      userName : '',
      emailId : '',
      phone : '',
      website : ''
    }
  }
  getData(){
    let ref = this;
    getDataFromServer('https://jsonplaceholder.typicode.com/users','GET','', function(status,response){
      ref.setState({
          usersList: response
        })
    }, function(errorStatus, response){
        ref.setState({
          usersList: []
        })
    });
  }
  addUser(){
    this.setState({
      addUserFlag: true
    });
  }
  changeUserName(event){
    this.setState({
      userName: event.target.value
    });
  }
  changePhoneNumber(event){
    this.setState({
      emailId: event.target.value
    });
  }
  changeEmailId(event){
    this.setState({
      phone: event.target.value
    });
  }
  changeWebsite(event){
    this.setState({
      website: event.target.value
    });
  }

  saveUserData(){
    let ref = this;
    getDataFromServer('https://jsonplaceholder.typicode.com/users','POST',{
      name : this.state.userName,
      phone: this.state.phone,
      email : this.state.emailId,
      website : this.state.website
    }, function(status,response){
      let users = ref.state.usersList;
      users.push(response);
      ref.setState({
        usersList: users,
        phone : '',
        website: '',
        emailId : '',
        userName : '',
        addUserFlag : false
      })
    }, function(errorStatus, response){
        alert('Failed to save record...Try again');
    });
  }

  clearData(){
    this.setState({
      phone : '',
      website: '',
      emailId : '',
      userName : ''
    });
  }

  closeAddUser(){
    this.setState({
      phone : '',
      website: '',
      emailId : '',
      userName : '',
      addUserFlag : false
    });
  }

  render() {
    if(this.state.addUserFlag){
      var AddUserDiv = <div>
        <input name='Name' placeholder='User Name' onChange={this.changeUserName.bind(this)}/>
        <input name='Phone' placeholder='Phone' onChange={this.changePhoneNumber.bind(this)}/>
        <input name='Email' placeholder='Email ID' onChange={this.changeEmailId.bind(this)}/>
        <input name='Website' placeholder='Website' onChange={this.changeWebsite.bind(this)}/>
        <button onClick={this.saveUserData.bind(this)}>Save</button>
        <button onClick={this.clearData.bind(this)}>Clear</button>
        <button onClick={this.closeAddUser.bind(this)}>Close</button>
        </div>;
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React HTTP call</h1>
        </header>
        <p className="App-intro">
          <button onClick={this.getData.bind(this)}>Get Data</button>
          <button onClick={this.addUser.bind(this)}>Add User</button>
        </p>
        <div>{ AddUserDiv }</div>
        <DataTable data={this.state.usersList} title="Users List"></DataTable>
		<br/>
		<a href='https://alligator.io/react/axios-react/'>https://alligator.io/react/axios-react/</a>
      </div>
    );
  }
}

export default App;
