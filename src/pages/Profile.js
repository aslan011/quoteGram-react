import React from 'react';
import { Container, Box, Typography } from '@material-ui/core';

function Profile(props)  {
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
                <br></br>
            </Container>
        )
}
export default Profile;