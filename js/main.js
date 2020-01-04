let name;


function changeHTML(){
    let a = document.getElementById("launcher");
    a.innerHTML=" ";  

    a.innerHTML="<div class='bedroom' id='bedroom'><div class='row'><div class='col-12'><p class='text-center text-bedroom box'> Inconnu : 'Hey ! Reveille toi !'</p></div></div><div class='row'><div class='col-12'><p class='text-center text-bedroom'>Inconnu : 'Comment as tu fais pour survivre ici aussi longtemps ?'</p></div></div><div class='row'><div class='col-12'><p class='text-center text-bedroom'>Inconnu : 'Quel est ton nom ?'</p></div></div><div class='row'><div class='col-lg-4 col-lg-offset-4 mx-auto'><div class='input-group'><input type='text' class='form-control' id='myname' /> <span class='input-group-btn'><button class='btn btn-dark' type='submit' value='Submit' onclick='setname();'>Entrer</button></span></div></div></div><div class='row'><div class='col-12'><p class='text-center text-bedroom' id='sayname'></p></div></div><div class='text-center'><button id='singlebutton bedroom' name='singlebutton' class='btn btn-light button-start' onclick='changeHTML2();'>Commencer</button></div></div>";
}

function changeHTML2(){
    let a = document.getElementById("bedroom");
    a.innerHTML=" ";  

    a.innerHTML="<div class='bedroom' id='bedroom1'> <div class='row'> <div class='col-12'> <p class='text-center text-bedroom box'> Inconnu : 'Bon maintenant que tu es debout il va falloir que tu saches ce qu'il se passe'</p></div></div><div class='row'> <div class='col-12'> <p class='text-center text-bedroom'>Inconnu : 'Un virus a été déployé il y a déjà 2 semaines, tous les adultes ce sont transformés en zombies assoiffés de sang de jeune. Les jeunes se sont donc divisés en plusieurs clans : D'un coté on a les geeks, les sportifs, les snobs et les végétariens...</p></div></div><div class='row'> <div class='col-12'> <p class='text-center text-bedroom'>Inconnu : 'Tu as des amis que tu aimerai retrouver ?'</p></div></div><div class='row'> <div class='col-12'> <p class='text-center text-bedroom'>Moi : 'Il faut que je retrouve Clitorine, ma copine !'</p></div></div><div class='row'> <div class='col-12 mx-auto'> <p class='text-center text-bedroom' id='sayname'></p></div><div class='container text-center'><button id='singlebutton' name='singlebutton' class='btn btn-light button-start' onclick='changeHTML3();'>Commencer</button></div></div></div>";
}

function changeHTML3(){
    let a = document.getElementById("bedroom1");
    a.innerHTML=" ";  

    a.innerHTML="<div class='bedroom' id='bedroom2'> <div class='row'> <div class='col-12'> <p class='text-center text-bedroom box'> Inconnu : 'Bonne chance alors ! Je vais devoir partir, je te prête une arme pour t'aider !</p></div></div><div class='row'> <div class='col-12'> <p class='text-center text-bedroom'>Inconnu : 'Tiens une matraque !'</p></div></div><div class='row'> <div class='col-12'> <p class='text-center text-bedroom'>Moi : 'Merci !' </p></div></div><div class='row'> <div class='col-12'> <p class='text-center text-item'> Vous recevez 1 matraque</p></div></div><div class='row'> <div class='col-12 mx-auto'> <p class='text-center text-bedroom' id='sayname'></p></div><div class='container text-center'><button id='singlebutton' name='singlebutton' class='btn btn-light button-start' onclick='changeHTML4();'>Commencer</button></div></div></div>";
}

function changeHTML4(){
    let a = document.getElementById("bedroom2");
    a.innerHTML=" ";  

    a.innerHTML="";
}

function setname(){
    name = document.getElementById("myname").value;
    console.log(name);

}

// function saidname() {
//     sayname.innerHTML ='salut' + name + '!';
//     console.log(sayname);
// }
