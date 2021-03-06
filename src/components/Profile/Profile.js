import React, { Component } from "react";

import { connect } from "react-redux";

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
    const { isSignedIn, userStuff } = this.props;
    const currentUser = firebase.auth().currentUser;

    let photoUrl;
    let clubBadge = defaultTeamBadge;
    let clubName = "No club yet";
    let nationBadge = defaultTeamBadge;
    let nationName = "No nation yet";

    if (isSignedIn) {
      if (currentUser.providerData[0].providerId === "facebook.com") {
        photoUrl = currentUser.photoURL + "?height=500";
      } else if (currentUser.providerData[0].providerId === "twitter.com") {
        photoUrl = currentUser.photoURL.replace("_normal", "");
      } else {
        photoUrl = currentUser.photoURL;
      }
    }

    if (Object.keys(userStuff).length > 0) {
      console.log(userStuff);
      clubBadge = userStuff.club.badge;
      clubName = userStuff.club.name;
      nationBadge = userStuff.nation.badge;
      nationName = userStuff.nation.name;

      Object.keys(userStuff.friends).map(friend => {
        firebase
          .database()
          .ref(`leagues/${userStuff.league}/players/` + friend)
          .once("value")
          .then(function(snapshot) {
            console.log(snapshot.val());
          });
      });
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
                  <img src={nationBadge} alt="team badge" />
                  <p>{nationName}</p>
                </div>
                <div className="profile-teams__cell">
                  <img src={clubBadge} alt="team badge" />
                  <p>{clubName}</p>
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

function mapStateToProps(state) {
  const { userStuff } = state;

  return {
    userStuff
  };
}

export default connect(mapStateToProps)(Profile);
