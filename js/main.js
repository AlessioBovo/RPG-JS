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

    a.innerHTML="<div class='pièce2couloir' id='bedroom2'> <div class='row'> <div class='col-12'> <p class='text-center text-bedroom box'>Mince.... Du sang coule du lavabo... qu'est ce qui se passe ici....</p></div></div><div class='row'> <div class='col-12'> <p class='text-center text-bedroom box'>Tu entends un bruit derrière toi</p></div></div><div class='row'> <div class='col-12'> <p class='text-center text-bedroom box'>Un long chemin est apparu à travers le mur...</p></div></div><div class='row'> <div class='col-6 mx-auto d-block'> <div class='container text-center'> <button id='singlebutton' name='singlebutton' class='btn btn-light button-start' onclick='vie3();'>Rentrer dans le couloir</button> </div></div></div></div></div>";
}

function vie3(){
    let a = document.getElementById("bedroom2");
    a.innerHTML=" ";  

    a.innerHTML=" <div class='télé' id='bedroom2'> <div class='row'> <div class='col-12'> <p class='text-center text-bedroom box'>Tu arrives dans une salle tout à fait normal</p></div></div><div class='row'> <div class='col-12'> <p class='text-center text-bedroom box'>Il y a juste une télé avec écrit :</p></div></div><div class='row'> <div class='col-12'> <p class='text-center text-bedroom box'>Répond juste à la question ou tu mourras.</p></div></div><div class='row'> <div class='col-12'> <p class='text-center text-bedroom box'>Quel est ton numéro de patient ?</p></div></div><div class='row'> <div class='col-6 mx-auto d-block'> <div class='container text-center'> <button id='singlebutton' name='singlebutton' class='btn btn-light button-start' onclick='mort1();'>n°2</button> </div></div><div class='col-6 mx-auto d-block'> <div class='container text-center'> <button id='singlebutton' name='singlebutton' class='btn btn-light button-start' onclick='vie4();'>n°5</button> </div></div><div class='col-6 mx-auto d-block'> <div class='container text-center'> <button id='singlebutton' name='singlebutton' class='btn btn-light button-start' onclick='mort1();'>n°7</button> </div></div></div></div></div>";
}

function vie4(){
    let a = document.getElementById("bedroom2");
    a.innerHTML=" ";  

    a.innerHTML=" <div class='scie' id='bedroom2'> <div class='row'> <div class='col-12'> <p class='text-center text-bedroom box'>Tu arrives dans une pièce avec une table au milieu, une scie est disposée sur cette dernière.</p></div></div><div class='row'> <div class='col-12'> <p class='text-center text-bedroom box'>Un papier avec un message s'y trouve avec écrit</p></div></div><div class='row'> <div class='col-12'> <p class='text-center text-bedroom box'>Nous avons mit dans ton avant bras une pillule, qui explosera dans la minute et déversera dans ton corps un poisson mortel.</p></div></div><div class='row'> <div class='col-12'> <p class='text-center text-bedroom box'>Tu sais ce qu'il te reste a faire n'est ce pas ? </p></div></div><div class='row'> <div class='col-6 mx-auto d-block'> <div class='container text-center'> <button id='singlebutton' name='singlebutton' class='btn btn-light button-start' onclick='vie5();'>Se couper l'avant bras gauche</button> </div></div><div class='col-6 mx-auto d-block'> <div class='container text-center'> <button id='singlebutton' name='singlebutton' class='btn btn-light button-start' onclick='versmort3();'>Se couper l'avant-bras droit</button> </div></div><div class='col-6 mx-auto d-block'> <div class='container text-center'> <button id='singlebutton' name='singlebutton' class='btn btn-light button-start' onclick='versmort2();'>Se couper les 2 avant-bras</button> </div></div></div></div></div>";
}

function vie5(){
    let a = document.getElementById("bedroom2");
    a.innerHTML=" ";  

    a.innerHTML="<div class='question1' id='bedroom2'> <div class='row'> <div class='col-12'> <p class='text-center text-bedroom box'>Bravo, tu as fais le bon choix </p></div></div><div class='row'> <div class='col-12'> <p class='text-center text-bedroom box'>Je trouve que cela est trop facile, je vais corser un peu les choses.</p></div></div><div class='row'> <div class='col-12'> <p class='text-center text-bedroom box'>Petite question : </p></div></div><div class='row'> <div class='col-12'> <p class='text-center text-bedroom box'>Que choisirez-tu ?</p></div></div><div class='row'> <div class='col-6 mx-auto d-block'> <div class='container text-center'> <button id='singlebutton' name='singlebutton' class='btn btn-light button-start' onclick='vie6();'>Te sacrifier</button> </div></div><div class='col-6 mx-auto d-block'> <div class='container text-center'> <button id='singlebutton' name='singlebutton' class='btn btn-light button-start' onclick='vie7();'>Sacrifier un inconnu</button> </div></div></div></div>";
}

function vie6(){
    let a = document.getElementById("bedroom2");
    a.innerHTML=" ";  

    a.innerHTML="<div class='question1' id='bedroom2'> <div class='row'> <div class='col-12'> <p class='text-center text-bedroom box'>Très Bien, tu as l'air d'être un personne qui ne pense pas qu'à elle.</p></div></div><div class='row'> <div class='col-12'> <p class='text-center text-bedroom box'>Tu passes à la salle suivante...</p></div></div><div class='row'> <div class='col-12 mx-auto d-block'> <div class='container text-center'> <button id='singlebutton' name='singlebutton' class='btn btn-light button-start' onclick='vie8();'>Continuer</button> </div></div></div></div>";
}

function vie7(){
    let a = document.getElementById("bedroom2");
    a.innerHTML=" ";  

    a.innerHTML="<div class='question1' id='bedroom2'> <div class='row'> <div class='col-12'> <p class='text-center text-bedroom box'>Tu entends un cri souffrance.... </p></div></div><div class='row'> <div class='col-12'> <p class='text-center text-bedroom box'>Aurai-je tuer quelqu'un ? </p></div></div><div class='row'> <div class='col-12'> <p class='text-center text-bedroom box'>&laquo Nous récoltons ce que l'on sème &raquo</p></div></div><div class='row'> <div class='col-12 mx-auto d-block'> <div class='container text-center'> <button id='singlebutton' name='singlebutton' class='btn btn-light button-start' onclick='vie12();'>Continuer</button> </div></div></div>";
}

function vie8(){
    let a = document.getElementById("bedroom2");
    a.innerHTML=" ";  

    a.innerHTML="<div class='twodoor' id='bedroom2'> <div class='row'> <div class='col-12'> <p class='text-center text-bedroom box'></p></div></div><div class='row'> <div class='col-12'> <p class='text-center text-bedroom box'>Encore une nouvelle salle... oh.. quelq'un est avec toi, sûrement la personne que tu as épargné. Vous êtes séparés par un grillage.</p></div></div><div class='row'> <div class='col-12'> <p class='text-center text-bedroom box'>Il y a 1 plaque devant chacun de vous, parfait, vous vous mettez chacun sur une, et les 2 portes s'ouvrent</p></div></div><div class='row'> <div class='col-12 mx-auto d-block'> <div class='container text-center'> <button id='singlebutton' name='singlebutton' class='btn btn-light button-start' onclick='vie10();'>Continuer</button> </div></div></div></div>";
}

function vie9(){
    let a = document.getElementById("bedroom2");
    a.innerHTML=" ";  

    a.innerHTML="";
}

function vie10(){
    let a = document.getElementById("bedroom2");
    a.innerHTML=" ";  

    a.innerHTML=" <div class='f2f' id='bedroom2'> <div class='row'> <div class='col-12'> <p class='text-center text-bedroom box'></p></div></div><div class='row'> <div class='col-12'>. <p class='text-center text-bedroom box'>&laquo Bravo, vous avez passé cet épreuve mais juste une personne peut sortir de ce jeu... Qui auras le plus de courage ? &raquo</p></div></div><div class='row'> <div class='col-12'> <p class='text-center text-bedroom box'>Il y a une arme devant chacun de vous. Bonne chance.</p></div></div><div class='row'> <div class='col-6 mx-auto d-block'> <div class='container text-center'> <button id='singlebutton' name='singlebutton' class='btn btn-light button-start' onclick='vie11();'>Tirer sur l'inconnu</button> </div></div><div class='col-6 mx-auto d-block'> <div class='container text-center'> <button id='singlebutton' name='singlebutton' class='btn btn-light button-start' onclick='versmort4();'>Ne pas tirer sur l'inconnu</button> </div></div></div></div>";
}

function vie11(){
    let a = document.getElementById("bedroom2");
    a.innerHTML=" ";  

    a.innerHTML=" <div class='mortarme' id='bedroom2'> <div class='row'> <div class='col-12'> <p class='text-center text-bedroom box'></p></div></div><div class='row'> <div class='col-12'>. <p class='text-center text-bedroom box'>Tu tires, l'inconnu s'effondre devant toi.</p></div></div><div class='row'> <div class='col-12'> <p class='text-center text-bedroom box'>Tu passes à la salle suivante.</p></div></div><div class='row'> <div class='col-6 mx-auto d-block'> <div class='container text-center'> <button id='singlebutton' name='singlebutton' class='btn btn-light button-start' onclick='vie13();'>Continuer</button> </div></div></div></div>";
}

function vie12(){
    let a = document.getElementById("bedroom2");
    a.innerHTML=" ";  

    a.innerHTML="<div class='twodoor' id='bedroom2'> <div class='row'> <div class='col-12'> <p class='text-center text-bedroom box'></p></div></div><div class='row'> <div class='col-12'>. <p class='text-center text-bedroom box'>Interressant 2 portes, séparées par un grillage, et 2 plaques pareillement disposées.</p></div></div><div class='row'> <div class='col-12'> <p class='text-center text-bedroom box'>&laquo Je te l'ai dit juste avant, on récolte ce que l'on sème. La personne que tu as tué aurait pu t'aider à passer à l'étape suivante... mais égoïste que tu es, tu l'as sacrifié...</p></div></div><div class='row'> <div class='col-12'> <p class='text-center text-bedroom box'>&laquo Comment vas-tu faire pour mettre quelques choses d'humain sur l'autre plaque. <br>Indice : il y a un cutter au dessus de ta tête. &raquo</p></div></div><div class='row'> <div class='col-6 mx-auto d-block'> <div class='container text-center'> <button id='singlebutton' name='singlebutton' class='btn btn-light button-start' onclick='vie13();'>Te couper le doigts</button> </div></div><div class='col-6 mx-auto d-block'> <div class='container text-center'> <button id='singlebutton' name='singlebutton' class='btn btn-light button-start' onclick='vie13();'>Te couper le pied</button> </div></div></div>";
}

function vie13(){
    let a = document.getElementById("bedroom2");
    a.innerHTML=" ";  

    a.innerHTML="<div class='twodoor' id='bedroom2'> <div class='row'> <div class='col-12'> <p class='text-center text-bedroom box'></p></div></div><div class='row'> <div class='col-12'>. <p class='text-center text-bedroom box'>Tu arrives à la salle suivant...</p></div></div><div class='row'> <div class='col-12'> <p class='text-center text-bedroom box'>Tu es celui qui a été le plus loin, tu es le meilleur patient.. j'avais vu juste sur toi...</p></div></div><div class='row'> <div class='col-12'> <p class='text-center text-bedroom box'>J'ai quand même encore envie de jouer avec toi...</p></div></div><div class='row'> <div class='col-12'> <p class='text-center text-bedroom box'>Je vais te faire une petite énigme très simple.. On va voir si l'Humain est encore logique de nos jours...</p></div></div><div class='row'> <div class='col-12 mx-auto d-block'> <div class='container text-center'> <button id='singlebutton' name='singlebutton' class='btn btn-light button-start' onclick='vie14();'>Continuer</button> </div></div></div></div>";
}

function vie14(){
    let a = document.getElementById("bedroom2");
    a.innerHTML=" ";  

    a.innerHTML="<div class='classe' id='bedroom2'> <div class='row'> <div class='col-12'> <p class='text-center text-bedroom box'></p></div></div><div class='row'> <div class='col-12'>. <p class='text-center text-bedroom box'>Sur la route pour me rendre en ville, je croise deux femmes. <br>Chacune porte une caisse contenant 4 chatons et un chat.</p></div></div><div class='row'> <div class='col-12'> <p class='text-center text-bedroom box'>Combien de jambes se dirigent vers la ville ?</p></div></div><div class='row'> <div class='col-3 mx-auto d-block'> <div class='container text-center'> <button id='singlebutton' name='singlebutton' class='btn btn-light button-start' onclick='versmort5();'>6</button> </div></div><div class='col-3 mx-auto d-block'> <div class='container text-center'> <button id='singlebutton' name='singlebutton' class='btn btn-light button-start' onclick='versmort5();'>4</button> </div></div><div class='col-3 mx-auto d-block'> <div class='container text-center'> <button id='singlebutton' name='singlebutton' class='btn btn-light button-start' onclick='vie15();'>2</button> </div></div><div class='col-3 mx-auto d-block'> <div class='container text-center'> <button id='singlebutton' name='singlebutton' class='btn btn-light button-start' onclick='versmort5();'>0</button> </div></div></div></div>";
}

function vie15(){
    let a = document.getElementById("bedroom2");
    a.innerHTML=" ";  

    a.innerHTML="";
}

function vieversmort1(){
    let a = document.getElementById("bedroom2");
    a.innerHTML=" ";  

    a.innerHTML=" <div class='pièce2porte' id='bedroom2'> <div class='row'> <div class='col-12'> <p class='text-center text-bedroom box'>Tu arrives devant cette porte au fond de la pièce</p></div></div><div class='row'> <div class='col-12'> <p class='text-center text-bedroom box'>Il y a une lumière derrière</p></div></div><div class='row'> <div class='col-12'> <p class='text-center text-bedroom box'>Sûrement la sortie !!!!</p></div></div><div class='row'> <div class='col-6 mx-auto d-block'> <div class='container text-center'> <button id='singlebutton' name='singlebutton' class='btn btn-light button-start' onclick='versmort1();'>Ouvrir la porte et s'enfuir</button> </div></div><div class='col-6 mx-auto d-block'> <div class='container text-center'> <button id='singlebutton' name='singlebutton' class='btn btn-light button-start' onclick='vie1();'>Faire demi-tour</button> </div></div></div></div></div>";
}

function versmort1(){
    let a = document.getElementById("bedroom2");
    a.innerHTML=" ";  

    a.innerHTML="<div class='pièce2porte' id='bedroom2'> <div class='row'> <div class='col-12'> <p class='text-center text-bedroom box'>Tu t'avances vers la porte...</p></div></div><div class='row'> <div class='col-12'> <p class='text-center text-bedroom box'>Tu met ta main sur la poignée</p></div></div><div class='row'> <div class='col-12'> <p class='text-center text-bedroom box'>Et tu ouvres la porte... mais...</p></div></div><div class='row'> <div class='col-12'> <p class='text-center text-bedroom box'>la poignée t'envoie une décharge de 10 000W</p></div></div><div class='row'> <div class='col-6 mx-auto d-block'> <div class='container text-center'> <button id='singlebutton' name='singlebutton' class='btn btn-light button-start' onclick='mort1();'>Continuer</button> </div></div></div></div></div>";
}

function versmort2(){
    let a = document.getElementById("bedroom2");
    a.innerHTML=" ";  

    a.innerHTML=" <div class='scie' id='bedroom2'> <div class='row'> <div class='col-12'> <p class='text-center text-bedroom box'>Tu ne peux pas te couper les 2 avant-bras...</p></div></div><div class='row'> <div class='col-12'> <p class='text-center text-bedroom box'>L'espèce humaine me dégoûte.</p></div></div><div class='row'> <div class='col-12 mx-auto d-block'> <div class='container text-center'> <button id='singlebutton' name='singlebutton' class='btn btn-light button-start' onclick='mort1();'>Continuer</button> </div></div></div></div>";
}

function versmort3(){
    let a = document.getElementById("bedroom2");
    a.innerHTML=" ";  

    a.innerHTML="<div class='scie' id='bedroom2'> <div class='row'> <div class='col-12'> <p class='text-center text-bedroom box'>Je ne t'avais pas dis quel avant-bras couper...</p></div></div><div class='row'> <div class='col-12'> <p class='text-center text-bedroom box'>Dommage c'etait le gauche...</p></div></div><div class='row'> <div class='col-12 mx-auto d-block'> <div class='container text-center'> <button id='singlebutton' name='singlebutton' class='btn btn-light button-start' onclick='mort1();'>Continuer</button> </div></div></div></div>";
}

function versmort4(){
    let a = document.getElementById("bedroom2");
    a.innerHTML=" ";  

    a.innerHTML=" <div class='mortarme' id='bedroom2'> <div class='row'> <div class='col-12'> <p class='text-center text-bedroom box'></p></div></div><div class='row'> <div class='col-12'>. <p class='text-center text-bedroom box'>La personne en face de toi n'a pas hésité on dirait.</p></div></div><div class='row'> <div class='col-12'> <p class='text-center text-bedroom box'>Il te tire une balle en plein coeur.</p></div></div><div class='row'> <div class='col-6 mx-auto d-block'> <div class='container text-center'> <button id='singlebutton' name='singlebutton' class='btn btn-light button-start' onclick='mort1();'>Continuer</button> </div></div></div></div>";
}

function versmort5(){
    let a = document.getElementById("bedroom2");
    a.innerHTML=" ";  

    a.innerHTML=" <div class='noyade' id='bedroom2'> <div class='row'> <div class='col-12'> <p class='text-center text-bedroom box'></p></div></div><div class='row'> <div class='col-12'>. <p class='text-center text-bedroom box'>Et non... Seulement 2, il n'y a que toi qui te rends en ville, les femmes que tu croises en sortent...</p></div></div><div class='row'> <div class='col-12'> <p class='text-center text-bedroom box'>Tu n'as pas le temps de réagir que de l'eau envahi la pièce...</p></div></div><div class='row'> <div class='col-12'> <p class='text-center text-bedroom box'>Tu meurs noyé...</p></div></div><div class='row'> <div class='col-3 mx-auto d-block'> <div class='container text-center'> <button id='singlebutton' name='singlebutton' class='btn btn-light button-start' onclick='mort1();'>Continuer</button> </div></div></div></div>";
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
