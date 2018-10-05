import React, { Component } from "react";

import moment from "moment";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

import defaultProfilePic from "../../assets/img/user.png";
import defaultTeamBadge from "../../assets/img/shield.png";

import "./Profile.css";

class Profile extends Component {
  uiConfig = {
    signInFlow: "redirect",
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
    const currentUser = firebase.auth().currentUser;

    let photoUrl;

    if (isSignedIn) {
      if (currentUser.providerData[0].providerId === "facebook.com") {
        photoUrl = currentUser.photoURL + "?height=500";
      } else if (currentUser.providerData[0].providerId === "twitter.com") {
        photoUrl = currentUser.photoURL.replace("_normal", "");
      } else {
        photoUrl = currentUser.photoURL;
      }
    }

    return (
      <div className="profile-container">
        {isSignedIn ? (
          <div className="profile profile--signed-in">
            <img className="profile-pic" alt="profile" src={photoUrl} />
            <h1>{firebase.auth().currentUser.displayName}</h1>
            <p>
              Est.{" "}
              {moment(firebase.auth().currentUser.metadata.creationTime).format(
                "LL"
              )}
            </p>
            <div className="profile-teams">
              <h3>Teams</h3>
              <div className="profile-teams__grid">
                <div className="profile-teams__cell">
                  <img src={defaultTeamBadge} alt="team badge" />
                  <p>No nation yet</p>
                </div>
                <div className="profile-teams__cell">
                  <img src={defaultTeamBadge} alt="team badge" />
                  <p>No club yet</p>
                </div>
              </div>
            </div>
            <div className="profile-rivals">
              <h3>Rivals</h3>
              <div className="profile-rivals__grid">
                <div className="profile-rivals__grid-cell">
                  <div className="rivals-badges">
                    <img src={defaultProfilePic} alt="rival" />
                    <img src={defaultTeamBadge} alt="badge" />
                  </div>
                  <p>Name</p>
                </div>
                <div className="profile-rivals__grid-cell">
                  <div className="rivals-badges">
                    <img src={defaultProfilePic} alt="rival" />
                    <img src={defaultTeamBadge} alt="badge" />
                  </div>
                  <p>Name</p>
                </div>
                <div className="profile-rivals__grid-cell">
                  <div className="rivals-badges">
                    <img src={defaultProfilePic} alt="rival" />
                    <img src={defaultTeamBadge} alt="badge" />
                  </div>
                  <p>Name</p>
                </div>
              </div>
            </div>
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
