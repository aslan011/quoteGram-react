import React from 'react';
import { Container, Box, Button, Typography } from '@material-ui/core';

function Explore(props)  {
        function handleClick(e) {
            const newFollow = e.target.parentElement.id;
            props.followUser(props.currentUser.key, newFollow);
        }

        const filterList = props.users.filter(user => {
            return (!props.currentUser.following.includes(user.username) && props.currentUser.username !== user.username);
        })

        const Display = () => {
            if (filterList.length === 0) {
                return <Container maxWidth="sm" justify="center"><Box>Nobody to explore :(</Box></Container>
            } else {
                return (
                    <Container maxWidth="sm" justify="center" style={{ backgroundColor: '#cfe8fc', borderRadius: '10px'}}>
                        <Box pt={3}>
                            <Typography color="primary" variant="h5">You can follow these people</Typography>
                        </Box>
                            {filterList.map(item => (
                            <Box p={3} m={2} border={1} borderColor="primary.main" borderRadius={16}>
                                {item.fullName}
                                <Button id={item.username} onClick={ (e) => {handleClick(e)}}>Add</Button>
                            </Box>
                            ))}
                            <br></br>
                    </Container>
                )}
        }

        return (
            <Display />
        )
};
export default Explore;