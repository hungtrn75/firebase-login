import React, { Component } from 'react';
import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCdeiQHkEsBDDxMQh9rFarKPz3dBUsHFPE",
    authDomain: "u-survey-a4512.firebaseapp.com",
    databaseURL: "https://u-survey-a4512.firebaseio.com",
    projectId: "u-survey-a4512",
    storageBucket: "u-survey-a4512.appspot.com",
    messagingSenderId: "130535044921"
};
firebase.initializeApp(config);

class Auth extends Component {
    render() {
        return (
            <div>
                <input id="email" type="email" placeholder="example@example.com" /><br/>;
                <input id="pass" type="password" placeholder="Your password" /><br/>
            </div>
        );
    }
}

export default Auth;