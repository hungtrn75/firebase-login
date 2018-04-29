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
    logIn() {
        let email = this.refs.email.value;
        let password = this.refs.password.value;

        firebase.auth().signInWithEmailAndPassword(email, password).then(user => {
            var lin = document.getElementById('login');
            var sup = document.getElementById('signup');
            var lout = document.getElementById('logout');
            lout.classList.remove('hide');
            sup.classList.add('hide');
            lin.classList.add('hide');
            this.setState({
                err: user.email
            })
        }).catch(error => {
            var err = error.message;
            this.setState({
                err
            });
        });
    }

    signUp() {
        let email = this.refs.email.value;
        let password = this.refs.password.value;

        firebase.auth().createUserWithEmailAndPassword(email, password).then(user => {
            var err = `Welcome ${user.email}`;
            firebase.database().ref('users/' + user.uid).set({
                email: user.email
            });
            this.setState({
                err
            });
        }).catch((error) => {
            var err = error.message;
            this.setState({
                err
            });
        });
    }

    logOut() {
        firebase.auth().signOut();
        var lin = document.getElementById('login');
        var sup = document.getElementById('signup');
        var lout = document.getElementById('logout');
        lout.classList.add('hide');
        sup.classList.remove('hide');
        lin.classList.remove('hide');
    }

    constructor(props) {
        super(props);
        this.state = {
            err: ''
        };
        this.logIn = this.logIn.bind(this);
        this.signUp = this.signUp.bind(this);
        this.logOut = this.logOut.bind(this);
    }


    render() {
        return (
            <div>
                <input id="email" type="email" placeholder="example@example.com" ref="email" /><br />;
                <input id="pass" type="password" placeholder="Your password" ref="password" /><br />
                <p>{this.state.err}</p>
                <button onClick={this.logIn} id="login">Login</button>
                <button onClick={this.signUp} id="signup">Sign up</button>
                <button onClick={this.logOut} id="logout" className="hide">Log out</button>
            </div>
        );
    }
}

export default Auth;