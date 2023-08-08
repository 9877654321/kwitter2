var firebaseConfig = {

      apiKey: "AIzaSyBi1x-qX-LLiYZ1ZTyP8Vi7msYpfr3lbz4",
    
      authDomain: "kwitter-c1edc.firebaseapp.com",
    
      databaseURL: "https://kwitter-c1edc-default-rtdb.firebaseio.com",
    
      projectId: "kwitter-c1edc",
    
      storageBucket: "kwitter-c1edc.appspot.com",
    
      messagingSenderId: "32124766957",
    
      appId: "1:32124766957:web:2cd62ac689fdb6e3a41ae4"
    
    };
    
    
    // Initialize Firebase
    
    firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
