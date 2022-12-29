//YOUR FIREBASE LINKS
var firebaseConfig = {
  apiKey: "AIzaSyCSgrYJBF5JduFxaoqsf5ZcOKxabZZ5ZoE",
  authDomain: "health-app-63b83.firebaseapp.com",
  databaseURL: "https://health-app-63b83-default-rtdb.firebaseio.com",
  projectId: "health-app-63b83",
  storageBucket: "health-app-63b83.appspot.com",
  messagingSenderId: "451581989094",
  appId: "1:451581989094:web:9e668151dda6f19f6feb27",
  measurementId: "G-8GKQC544C6"
};
firebase.initializeApp(firebaseConfig);  

  n=localStorage.getItem("username");
  y=localStorage.getItem("Age");
  w=localStorage.getItem("weight");
  h=localStorage.getItem("height");
  di=localStorage.getItem("Disease");
  bg=localStorage.getItem("BloodGroup");


function room() {  
  q=document.getElementById('Room').value;
firebase.database().ref("/").child(q).update({
  Name : n,
  Age : y,
  weight : w,
  height : h,
   Disease : di,
  BloodGroup : bg,
});

  localStorage.setItem("roomname",q);
  window.location="page.html";   
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;

  console.log("Room Name is "+Room_names);
  row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
  document.getElementById('output').innerHTML+=row;
  });});}
getData();


function redirectToRoomName(s) {
  console.log("clicked room name",s); 
  localStorage.setItem("roomname",s);
  window.location="page.html";   
}

function logout() {
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location="index.html";
}