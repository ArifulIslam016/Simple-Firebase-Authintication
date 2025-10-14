import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../Componets/firebase/firebase.init";

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const Login = () => {
  const [user, setUser] = useState();

  const handleSignin = () => {
    // console.log("hi")
    signInWithPopup(auth, googleProvider)
      .then((result) => setUser(result.user))
      .catch((err) => console.log(err));
  };
  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider).then((result) => setUser(result.user)).catch(err=>console.log(err));
  };
  const handleLogOut = () => {
    signOut(auth).then(() => {
      console.log("signOut Successful");
      setUser(null);
    });
  };
console.log(user)
  return (
    <div>
      {user ? (
        <button onClick={handleLogOut}>Log Out</button>
      ) : (
        <>
          <button onClick={handleSignin}> Sign in with google</button>
          <button onClick={handleGithubSignIn}> Sign in with Github</button>
        </>
      )}
      {user ? <h4>User : {user.displayName}</h4> : ""}
      {user ? <h4>Contact : {user.email}</h4> : ""}
      {user ? <img src={user.photoURL} alt="photoof User" /> : ""}
    </div>
  );
};

export default Login;
/****
 * _UserImpl {providerId: 'firebase', proactiveRefresh: ProactiveRefresh, reloadUserInfo: {…}, reloadListener: null, uid: 'kmZH2KvnTeaM8jeOxhNKih9EKor1', …}
accessToken
: 
"eyJhbGciOiJSUzI1NiIsImtpZCI6ImE1YTAwNWU5N2NiMWU0MjczMDBlNTJjZGQ1MGYwYjM2Y2Q4MDYyOWIiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiQXJpZnVsIElzbGFtIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0lQMmtpcEtkWUtVUXRNZTRoWVVPandNZjdmQmUzamo4VnJ0U1R3dTgzc0RiMEVIU2h0PXM5Ni1jIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL3NpbXBsZS1yZWFjdC1hdXRoaW50aWNhdGlvbnMiLCJhdWQiOiJzaW1wbGUtcmVhY3QtYXV0aGludGljYXRpb25zIiwiYXV0aF90aW1lIjoxNzYwNDUzNzE3LCJ1c2VyX2lkIjoia21aSDJLdm5UZWFNOGplT3hoTktpaDlFS29yMSIsInN1YiI6ImttWkgyS3ZuVGVhTThqZU94aE5LaWg5RUtvcjEiLCJpYXQiOjE3NjA0NTM3MTcsImV4cCI6MTc2MDQ1NzMxNywiZW1haWwiOiJhcmlmdWxxMjM0QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7Imdvb2dsZS5jb20iOlsiMTExNjA2NDc1MTkxNTM3NjI4MDY0Il0sImVtYWlsIjpbImFyaWZ1bHEyMzRAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoiZ29vZ2xlLmNvbSJ9fQ.Bqu5YliPOdDuJ6XasyW7i7-hEw8dOsCh-WfjodVNGJW6pD9lT7L-B1i8iKsHYSmCHNAZk7BPFOpL1VC5mdUioQBhzqLQ_4QazK-ejvGdBrPb83GX6muyQkTmvgcEVA2_lS0cBx5AGeNcGBev2nePqilScv8SfpxofEF-93Fmbr-4tFthXlDHFWWC_cqqgXWQMyvw1fuPmrlHR1Ye8yEUqufbtxRJsS68dtFzXDYirw2RgDJyTDbe4jet7Xz0duDESmBR41VCABMcUPnuUOsgXZmbsUP6P5cS3OewbmmMD_HhLVwaOWPbhENIwklbuseR4M2I8BJRq4_feo9xN__qtQ"
auth
: 
AuthImpl {app: FirebaseAppImpl, heartbeatServiceProvider: Provider, appCheckServiceProvider: Provider, config: {…}, currentUser: _UserImpl, …}
displayName
: 
"Ariful Islam"
email
: 
"arifulq234@gmail.com"
emailVerified
: 
true
isAnonymous
: 
false
metadata
: 
UserMetadata {createdAt: '1760450757237', lastLoginAt: '1760453717991', lastSignInTime: 'Tue, 14 Oct 2025 14:55:17 GMT', creationTime: 'Tue, 14 Oct 2025 14:05:57 GMT'}
phoneNumber
: 
null
photoURL
: 
"https://lh3.googleusercontent.com/a/ACg8ocIP2kipKdYKUQtMe4hYUOjwMf7fBe3jj8VrtSTwu83sDb0EHSht=s96-c"
proactiveRefresh
: 
ProactiveRefresh {user: _UserImpl, isRunning: false, timerId: null, errorBackoff: 30000}
providerData
: 
[{…}]
providerId
: 
"firebase"
reloadListener
: 
null
reloadUserInfo
: 
{localId: 'kmZH2KvnTeaM8jeOxhNKih9EKor1', email: 'arifulq234@gmail.com', displayName: 'Ariful Islam', photoUrl: 'https://lh3.googleusercontent.com/a/ACg8ocIP2kipKdYKUQtMe4hYUOjwMf7fBe3jj8VrtSTwu83sDb0EHSht=s96-c', emailVerified: true, …}
stsTokenManager
: 
_StsTokenManager {refreshToken: 'AMf-vBzITvtctmSN6WwbSauBECbdZphKtS4rQYk9BlJiE6jwYH…Xv16d2WdRGsw5OmGcC1vTlkTfmdBFi_JrFgcu6mR33LfhiNWw', accessToken: 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImE1YTAwNWU5N2NiMWU0Mj…mmMD_HhLVwaOWPbhENIwklbuseR4M2I8BJRq4_feo9xN__qtQ', expirationTime: 1760457317416}
tenantId
: 
null
uid
: 
"kmZH2KvnTeaM8jeOxhNKih9EKor1"
refreshToken
: 
(...)
[[Prototype]]
: 
Object
 */
