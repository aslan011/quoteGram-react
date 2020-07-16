import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import FilledInput from '@material-ui/core/FilledInput';
import Button from '@material-ui/core/Button';
import { Box } from '@material-ui/core';

class LogIn extends Component {
    constructor(props) {
      super(props)
      this.state = {
        email: null,
        password: null
      }
    }
  
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.accountValidation(this.state)
      e.target.reset();
  }
  
    handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
    })
    }
    render() {
    return (
      <Container component="main" maxWidth="sm">
          <Box pb={15}></Box>
          <img margin="0 auto"  src="./logo.png" alt="logo" />
          <Typography align="center" component="h6" variant="h6">
          Sign up to see photos and videos from your friends.
          </Typography>
          <form onSubmit={this.handleSubmit}>
            <FilledInput required type="email" name="email" fullWidth placeholder="Email address" onChange={this.handleChange}/>
            <FilledInput required type="password" name="password" fullWidth placeholder="Password" onChange={this.handleChange}/>
            <Button type="submit" variant="contained" color="primary">Log in</Button>
          </form>
          <Button onClick= {() => this.props.loggingIn()} variant="contained" color="secondary">Go back</Button>
      </Container>
      )}
};

export default LogIn;