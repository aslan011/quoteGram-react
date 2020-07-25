import React, {Component} from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import {db} from './firebase';
import NavBar from './components/NavBar';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import Profile from './pages/Profile';
import Feed from './pages/Feed';
import Explore from './pages/Explore'
import Messages from './pages/Messages'
import Notifications from './pages/Notifications'
import * as firebase from 'firebase';


function LogInControl(props) {
  if (props.isLoggedIn) {
    return (
      <Router>
        <NavBar />
        <Route path='/' exact render={() => <Feed currentUser = {props.currentUser} users = {props.users} />} />
        <Route path='/explore' render={() => <Explore users = {props.users} currentUser = {props.currentUser} followUser = {props.followUser} />} />
        <Route path='/messages' component={Messages} />
        <Route path='/notifications' component={Notifications} />
        <Route path='/profile' render={() => <Profile currentUser = {props.currentUser} uploadQuote = {props.uploadQuote} />} />
      </Router>
    );
  } else if (props.isloggingIn) {
    return <LogIn accountValidation = {props.accountValidation} loggingIn = {props.loggingIn} />
  }
    return <SignUp addUser = {props.addUser} loggingIn = {props.loggingIn} />;
  }


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      isLoggedIn: false,
      isloggingIn: false,
      currentUser: []
    }
  }

  listener() {
    return (
    db.collection("users")
    .get()
    .then(querySnapshot => {
      const data = [];
      querySnapshot.docs.forEach(doc => {
        const user = doc.data()
        user["key"] = doc.id
        data.push(user)
      });
      this.setState({ users: data });
    }));
  }

  componentDidMount() {
    this.listener()
  }

  addUser = (user) => {
    db.collection('users').add(
      user)
    .then(() => this.listener())
    .then(() => this.accountValidation(user))
  }

  uploadQuote = (key, quoteObj) => {
    const user = db.collection('users').doc(key);
    user.update({
      quotes: firebase.firestore.FieldValue.arrayUnion(quoteObj.text)
    });
    this.listener().then(() => {this.accountValidation(this.state.currentUser)});
  }

  followUser = (key, newFollow) => {
    const user = db.collection('users').doc(key);
    user.update({
      following: firebase.firestore.FieldValue.arrayUnion(newFollow)
    });
    // needed to use a Promise here as currentUser state was updating using the previous state
    this.listener().then(() => {this.accountValidation(this.state.currentUser)});
  }

  loggingIn = () => {
    this.setState( prevState => ({
      isloggingIn: !prevState.isloggingIn
    }))
  }

  accountValidation = (creds) => {
    const currentUser = this.state.users.find(user => 
      user.email === creds.email)
    if (currentUser && currentUser.password === creds.password) {
      return (
        this.setState({
          currentUser: currentUser,
          isLoggedIn: true
        })
      )
    }       
    
      return (
      this.setState({
        isloggingIn: false
      }),
      alert("Incorrect email or password, please try again")
    )

    }
  
  render() {
    return (
      <div>
        <LogInControl users={this.state.users} currentUser = {this.state.currentUser} followUser = {this.followUser} uploadQuote = {this.uploadQuote} accountValidation = {this.accountValidation} loggingIn = {this.loggingIn} addUser = {this.addUser} isLoggedIn = {this.state.isLoggedIn} isloggingIn = {this.state.isloggingIn}/>
      </div>
    );
  }
}
export default App;
