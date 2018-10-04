import React, { Component } from "react";

import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

import defaultProfilePic from "../../assets/img/user.png";

import "./Profile.css";

class Profile extends Component {
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => false
    }
  };

  render() {
    const { isSignedIn } = this.props;

    return (
      <div className="profile-container">
        {isSignedIn ? (
          <div className="profile profile--signed-in">
            <img
              className="profile-pic"
              alt="profile"
              src={firebase.auth().currentUser.photoURL + "?height=500"}
            />
            <h1>{firebase.auth().currentUser.displayName}</h1>
            <p>
              Total Football is still a work in progress. More features will be
              added here in future. Thank you!
            </p>
            <button
              className="logout-button"
              onClick={() => firebase.auth().signOut()}
            >
              Sign Out
            </button>
          </div>
        ) : (
          <div className="profile">
            <img
              className="profile-pic"
              src={defaultProfilePic}
              alt="profile"
            />
            <p>You are not signed in.</p>
            <div className="login-buttons">
              <StyledFirebaseAuth
                uiConfig={this.uiConfig}
                firebaseAuth={firebase.auth()}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Profile;
