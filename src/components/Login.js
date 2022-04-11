import React, { useContext } from 'react';
import { Button, Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import { Context } from '..';
import firebase from 'firebase/compat/app';



const Login = () => {
const{auth} = useContext(Context)

const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    const {user} = await auth.signInWithPopup(provider)
    console.log(user)
}

    return (   
        <Container>
            <Grid container
                style={{height: window.innerHeight - 50}}
                alignItems={"center"}
                justifyContent={"center"}
            >
                <Grid style={{width:300}}
                    container
                    alignItems={"center"}
                    direction={"column"}
                >
                    <img style={{width:20}} src='https://cdn-icons-png.flaticon.com/512/2702/2702649.png' />
                    <Box p={5}>
                        <Button onClick={login} variant='outline'>Log in with Google</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}
 
export default Login;