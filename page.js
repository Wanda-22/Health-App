
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

  if (30 < y && 40 > y) {
    document.getElementById("e1").innerHTML="Plank";
    document.getElementById("e2").innerHTML="Squat";
    document.getElementById("e3").innerHTML="Lunge";
    document.getElementById("e4").innerHTML="Squat Jump";
    document.getElementById("e5").innerHTML="Bridge";
    document.getElementById("e6").innerHTML="Running";
  }
   
  if (20 > y && 30 < y) {
    document.getElementById("e1").innerHTML="Wall Sit";
    document.getElementById("e2").innerHTML="Burpee";
    document.getElementById("e3").innerHTML="Lunge";
    document.getElementById("e4").innerHTML="Sit Up";
    document.getElementById("e5").innerHTML="Walking lunge";
    document.getElementById("e6").innerHTML="Running";
  }

  if (40 < y && 50 > y) {
    document.getElementById("e1").innerHTML="Dip";
    document.getElementById("e2").innerHTML="Side Plank";
    document.getElementById("e3").innerHTML="Leg Press";
    document.getElementById("e4").innerHTML="Squat Jump";
    document.getElementById("e5").innerHTML="Russian Twist";
    document.getElementById("e6").innerHTML="Running";
  }
   
  if (3 < y && 20 > y) {
    document.getElementById("e1").innerHTML="Jump rope";
    document.getElementById("e2").innerHTML="Swimming";
    document.getElementById("e3").innerHTML="Cycling";
    document.getElementById("e4").innerHTML="Jumping jacks";
    document.getElementById("e5").innerHTML="Frog jumps";
    document.getElementById("e6").innerHTML="Running";
  }

  if (3 < y && 20 > y) {
    document.getElementById("e1").innerHTML="Jump rope";
    document.getElementById("e2").innerHTML="Swimming";
    document.getElementById("e3").innerHTML="Cycling";
    document.getElementById("e4").innerHTML="Jumping jacks";
    document.getElementById("e5").innerHTML="Frog jumps";
    document.getElementById("e6").innerHTML="Running";
  }
     
  
  if (1 < w && 100 > w) {
    document.getElementById("d1").innerHTML="Sprouts Stir- Fry";
    document.getElementById("d2").innerHTML="Palak Masoor Dal";
    document.getElementById("d3").innerHTML="Kale";
    document.getElementById("d4").innerHTML="Almonds";
    document.getElementById("d5").innerHTML="Mangos";
    document.getElementById("d6").innerHTML="Eggs";
    document.getElementById("d7").innerHTML="Chickhen Soup";
    document.getElementById("d8").innerHTML="Fish";
    document.getElementById("d9").innerHTML="Prawns";
    document.getElementById("d10").innerHTML="Tuna";
  }
       function out() {
        localStorage.removeItem("username");
        localStorage.removeItem("roomname");
        window.location="index.html";
  }  