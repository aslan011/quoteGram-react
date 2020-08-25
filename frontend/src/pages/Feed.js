import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Box, Typography } from '@material-ui/core';

function Feed(props)  {
    const filterList = props.users.filter(user => {
        return props.currentUser.following.includes(user.username)
    })

    const Display = () => {
        if (filterList.length === 0) {
            return (
            <Container maxWidth="sm" justify="center" style={{ backgroundColor: '#cfe8fc', borderRadius: '10px'}}>
                <Box pt={3}>
                    <Typography color="primary" variant="h5">Updates from your followers will appear here, go  
                         {<Link to='/explore'> Explore</Link>} and get following!
                        <br></br>
                        Or you can check out your {<Link to='/profile'>Profile</Link>} 
                    </Typography>
                    <br></br>
                </Box>
            </Container>
        )} else {
            return (
                <Container maxWidth="sm" justify="center" style={{ backgroundColor: '#cfe8fc', borderRadius: '10px'}}>
                    <Box pt={3}>
                        <Typography color="primary" variant="h5">Updates from your followers</Typography>
                    </Box>
                    {filterList.map(item => (
                        item.quotes.map(quote => (
                            <Box style={{ backgroundColor: '#dfe8fc'}} p={2} m={4} border={1} borderColor="transparent" borderRadius={16}>
                                <Typography color="textPrimary" variant="body1">{quote}</Typography>
                                <Typography color="textSecondary" variant="caption">{item.fullName}</Typography>
                            </Box>
                            ))
                    ))}
                    <br></br>
                </Container>
            )}
    }

    return (
        <Display  />
    )
}
export default Feed;