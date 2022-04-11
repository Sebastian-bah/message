import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

firebase.initializeApp({

    apiKey: "AIzaSyC0nU5G28WZePtt2Cz1SVlCS1N8avUzwz8",

    authDomain: "chat-react-70a57.firebaseapp.com",

    projectId: "chat-react-70a57",

    storageBucket: "chat-react-70a57.appspot.com",

    messagingSenderId: "136554338282",

    appId: "1:136554338282:web:5d69c176c57bd17ef2c493"

  }
);

export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()


export {auth, firestore}

ReactDOM.render(
  <React.StrictMode>
    <Context.Provider value={{
      firebase,
      auth,
      firestore
    }}>
      <App />
    </Context.Provider>,
    
  </React.StrictMode>,
  document.getElementById('root')
);


