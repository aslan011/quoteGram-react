import React from 'react';
import { Container, Box, Typography } from '@material-ui/core';

function Messages() {
    return (
        <Container maxWidth="sm" justify="center" style={{ backgroundColor: '#cfe8fc', borderRadius: '10px'}}>
            <Box pt={3}>
                <Typography color="primary" variant="h5">Messaging feature coming soon!</Typography>
            </Box>
            <br></br>
        </Container>
    )
}

export default Messages;