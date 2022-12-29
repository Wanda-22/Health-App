function send() {
    n=document.getElementById("name").value;
    localStorage.setItem("username",n);
    w=document.getElementById("weight").value;
    localStorage.setItem("weight",w);
    h=document.getElementById("height").value;
    localStorage.setItem("height",h);
    y=document.getElementById("Age").value;
    localStorage.setItem("Age",y);
    bg=document.getElementById("bg").value;
    localStorage.setItem("BloodGroup",bg);
    di=document.getElementById("di").value;
    localStorage.setItem("Disease",di);
    window.location="allrooms.html";
}
