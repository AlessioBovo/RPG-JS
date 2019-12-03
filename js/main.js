let name;


function changeHTML(){
    let a = document.getElementById("launcher");
    a.innerHTML=" ";  

    a.innerHTML="";
}

function setname(){
    name = document.getElementById("myname").value;
    console.log(name);

}

function saidname() {
    sayname.innerHTML ='salut' + name + '!';
    console.log(sayname);
}
