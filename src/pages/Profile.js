import React from 'react';
import { Container, Box, Button, Typography, FormControl, Input, InputLabel } from '@material-ui/core';

function Profile(props)  {
        const [userInfo, setUserInfo] = React.useState({ 
            text: '',
      });

        function handleChange (e) {
            setUserInfo({ text: e.target.value})
        }

        function handleSubmit(e) {
            props.uploadQuote(props.currentUser.key,userInfo)
            document.getElementById('my-input').value = '';
        }    
        return (
            <Container maxWidth="sm" justify="center" style={{ backgroundColor: '#cfe8fc', borderRadius: '10px'}}>
                <Box pt={3}>
                    <Typography color="primary" variant="h6">{`You are currently logged in as ${props.currentUser.fullName}`}</Typography>
                </Box>
                {props.currentUser.quotes.map(item => (
                <Box style={{ backgroundColor: '#dfe8fc'}} p={2} m={4} border={1} borderColor="transparent" borderRadius={16}>
                    <Typography color="textPrimary" variant="body1">
                        {item}
                    </Typography>
                </Box>
                ))}
                <Box pt={2}>
                <FormControl fullWidth= "true">
                    <InputLabel htmlFor="my-input">Add new quote</InputLabel>
                    <Input onChange={(e) => handleChange(e)}id="my-input" aria-describedby="my-helper-text" />
                    <Button onClick={(e) => handleSubmit(e)}>Upload</Button>
                </FormControl>
                </Box>
                <br></br>
            </Container>
        )
}
export default Profile;