import React, { useContext } from 'react';
import { AppBar, Button, Grid, Toolbar} from '@mui/material'; 
import { NavLink } from 'react-router-dom';
import { LOGIN_ROUTE } from '../utils/consts';
import { Context } from '..';
import {useAuthState} from 'react-firebase-hooks/auth';


const Navbar = () => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)

    return (         
        <AppBar color={"default"} position="static">
            <Toolbar variant={"dense"}>
               <Grid container justifyContent={"flex-end"}>
                    {user ?
                        <Button onClick={() => auth.signOut()} variant='outline'>Exit</Button>
                        :
                        <NavLink to={LOGIN_ROUTE}>
                            <Button style={{color:'black'}} variant='outline'>Login</Button>
                        </NavLink>
                    }               
               </Grid>
            </Toolbar>
        </AppBar>
    );
};
 
export default Navbar;