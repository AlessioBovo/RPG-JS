let name;


function changeHTML(){
    let a = document.getElementById("launcher");
    a.innerHTML=" ";  

    a.innerHTML="<div class='bedroom' id='bedroom'><div class='row'><div class='col-12'><p class='text-center text-bedroom box'>Tu te réveilles, il fait sombre et humide....</p></div></div><div class='row'><div class='col-12'><p class='text-center text-bedroom'>Tu es seul(e). Tu te demandes bien ce que tu fais la hein ? </p></div><div class='row'><div class='col-12'><p class='text-center text-bedroom'>Tu entend soudainement quelqu'un à travers un haut parleur.</p></div></div><div class='row'><div class='col-lg-4 col-lg-offset-4 mx-auto'><span class='input-group-btn'></div></div></div><div class='row'><div class='col-12'><p class='text-center text-bedroom' id='sayname'></p></div></div><div class='text-center'><button id='singlebutton bedroom' name='singlebutton' class='btn btn-light button-start' onclick='changeHTML2();'>Commencer</button></div></div>";
}

function changeHTML2(){
    let a = document.getElementById("bedroom");
    a.innerHTML=" ";  

    a.innerHTML="<div class='bedroom' id='bedroom1'> <div class='row'> <div class='col-12'> <p class='text-center text-bedroom box'>Bonjour Patient n°5, j'espère que la salle vous plait...</p></div></div><div class='row'> <div class='col-12'> <p class='text-center text-bedroom'>Je vous ai préparé quelques petites épreuves, faites attention aux choix que vous faisait.</p></div></div><div class='row'> <div class='col-12'> <p class='text-center text-bedroom'>Si vous tenez à la vie, faites les bons choix.</p></div></div><div class='row'> <div class='col-12'> <p class='text-center text-bedroom'></p></div></div><div class='row'> <div class='col-12 mx-auto'> <p class='text-center text-bedroom' id='sayname'>Les 4 patients avant vous sont.... Comment dire.. Huuuum MORTES <br> Bonne Chance.</p></div><div class='container text-center'><button id='singlebutton' name='singlebutton' class='btn btn-light button-start' onclick='changeHTML3();'>Commencer</button></div></div></div>";
}

function changeHTML3(){
    let a = document.getElementById("bedroom1");
    a.innerHTML=" ";  

    a.innerHTML="<div class='bedroom' id='bedroom2'> <div class='row'> <div class='col-12'> <p class='text-center text-bedroom box'>Tu regardes ta main, tu es attaché avec des menottes, et au dessus de toi, un seau rempli d'acide, pret a tomber, tu peux prendre avec ton autre main une hache, quel est ton choix ? </p></div></div><div class='row'> <div class='col-6 mx-auto d-block'> <div class='container text-center'><button id='singlebutton' name='singlebutton' class='btn btn-light button-start' onclick='vie1();'>Couper les menottes</button></div></div><div class='col-6'> <div class='container text-center'><button id='singlebutton' name='singlebutton' class='btn btn-light button-start' onclick='mort1();'>Rester sous le seau d'acide</button></div></div></div></div>";
}

function vie1(){
    let a = document.getElementById("bedroom2");
    a.innerHTML=" ";  

    a.innerHTML="<div class='pièce2' id='bedroom2'> <div class='row'> <div class='col-12'> <p class='text-center text-bedroom box'>Tu arrives dans une nouvelle pièce, il fait de plus en plus froid</p></div></div><div class='row'> <div class='col-12'> <p class='text-center text-bedroom box'>Tu commences à paniquer, tu ne sens bientôt plus tes doigts...</p></div></div><div class='row'> <div class='col-12'> <p class='text-center text-bedroom box'>Que faire ? </p></div></div><div class='row'> <div class='col-6 mx-auto d-block'> <div class='container text-center'> <button id='singlebutton' name='singlebutton' class='btn btn-light button-start' onclick='vie2();'>Passer les mains sous l'eau chaude du robinet</button> </div></div><div class='col-6'> <div class='container text-center'> <button id='singlebutton' name='singlebutton' class='btn btn-light button-start' onclick='vieversmort1();'>Chercher une porte de sortie</button> </div></div></div></div>";
}

function vie2(){
    let a = document.getElementById("bedroom2");
    a.innerHTML=" ";  

    a.innerHTML="ffffff";
}

function vieversmort1(){
    let a = document.getElementById("bedroom2");
    a.innerHTML=" ";  

    a.innerHTML="azzaa";
}

function mort1(){
    let a = document.getElementById("bedroom2");
    a.innerHTML=" ";  

    a.innerHTML="<div class='dead'> <div class='Dead' id='bedroom2'> <div class='row'> <div class='col-12'> <p class='text-center text-dead box'>TU ES MORT</p></div></div></div></div>";
}

function setname(){
    name = document.getElementById("myname").value;
    console.log(name);

}

// function saidname() {
//     sayname.innerHTML ='salut' + name + '!';
//     console.log(sayname);
// }
