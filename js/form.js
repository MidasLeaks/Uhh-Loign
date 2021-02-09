  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDwavMa-Pwc3_Hx_HkY5KxC6lL-oP_yGZY",
    authDomain: "gta-forum-db.firebaseapp.com",
    projectId: "gta-forum-db",
    storageBucket: "gta-forum-db.appspot.com",
    messagingSenderId: "222295455623",
    appId: "1:222295455623:web:d96cb65d4866b1555a0522",
    measurementId: "G-49QV5TLD66"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

    const auth = firebase.auth();

    function signUp(){
  
      var email = document.getElementById("email");
      var password = document.getElementById("password");
      
      const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
      promise.catch(e => alert(e.message));
      
      alert("Account Successfully Created");
     }
     
     
     
     function signIn(){
      
      var email = document.getElementById("email");
      var password = document.getElementById("password");
      
      const promise = auth.signInWithEmailAndPassword(email.value, password.value);
      promise.catch(e => alert(e.message));
      
      
      
      
     }
     
     
     function signOut(){
      
      auth.signOut();
      alert("Signed Out, Please Login");
      
     }
     
     
     
     auth.onAuthStateChanged(function(user){
      
      if(user){
       
       var email = user.email;

       window.location = "./home.html";

       //alert("Current User - " + email);
       
       //Take user to a different or home page
    
       //is signed in
       
      }else{
       
       alert("No Active User");
       //no user is signed in
      }
      
      
      
     });