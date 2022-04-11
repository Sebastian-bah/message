import React, { useContext, useState } from 'react';
import { Avatar, Button, Container, Grid, TextField } from '@mui/material';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from '..';
import Loader from './Loader';
import {useCollectionData} from 'react-firebase-hooks/firestore';
import firebase from 'firebase/compat/app';
import './Chat.css';



const Chat = () => {
    const {auth, firestore} = useContext(Context)
    const [user] = useAuthState(auth)
    const [value, setValue] = useState('    ')
    const [messages, loading] = useCollectionData(
    firestore.collection('messages').orderBy('createAt')
    )

    const sendMessage = async () => {
        firestore.collection('messages').add({
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: value,
            createAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setValue('  ')
    }

if (loading) {
    return <Loader/>
}

    return (
        <Container>
            <Grid container
                justifyContent={"center"}
                style={{height: window.innerHeight - 50, marginTop: 20}}>
                <div className='chatblock' style={{width: '80%', height: '70vh',  overflowY:'auto', borderRadius: 5}}>                  
                    
                    {messages.map(message =>
                        <div  className='chatuser' style={{
                            margin: 15,
                            marginTop: 20,
                            padding: 5,
                            borderRadius: 5,
                            marginLeft: user.uid === message.uid ? 'auto' : '10px',
                            width: 'fit-content',
                        }}>
                            <Grid container >
                                <Avatar src={message.photoURL}/>
                                <div style={{margin: 15}}>{message.displayName}</div>
                            </Grid>
                            <div>{message.text}</div>
                        </div>
                    )}
                    
                </div>
                <Grid
                        container
                        direction={'column'}
                        alignItems={"flex-end"}
                        style={{width:'80%', }}
                    >
                        <TextField 
                            fullWidth
                            maxRows={2}
                            variant='outlined'
                            value={value}
                            onChange={e => setValue(e.target.value)}
                        />
                        <Button className='AddMes' onClick={sendMessage} style={{backgroundColor: 'black', color: 'white', marginTop:10, padding: 5, borderRadius: 5, textTransform: 'none'}}>to send</Button>
                    </Grid>
            </Grid>
        </Container>
    );
}
        
export default Chat;
