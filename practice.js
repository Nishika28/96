var firebaseConfig = {
    apiKey: "AIzaSyBNBuC4FCVjYY9tmOk9zZVgKd7sRRfqWMQ",
    authDomain: "c-96-c03c3.firebaseapp.com",
    databaseURL: "https://c-96-c03c3-default-rtdb.firebaseio.com",
    projectId: "c-96-c03c3",
    storageBucket: "c-96-c03c3.appspot.com",
    messagingSenderId: "696156112208",
    appId: "1:696156112208:web:95d49ce2255a65f252d855",
    measurementId: "G-QN08MVT51E"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


function addUser()
{
 user_name = document.getElementById("user_name").value;
 firebase.database().ref("/").child(user_name).update({
     purpose : "adding user"
 });


}