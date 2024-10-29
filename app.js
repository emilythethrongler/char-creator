//getting DOM elements

databasediv = document.getElementById("database");

document.getElementById("submitBtn").onclick = function() {new_char()};


//skeleton for character class
const template = {
    name:"",
    background:"",
    powerlevel:"",
    tastiness:""
}




// the array of character objects

database = [];

//getting the 

function new_char() {
    //makes new char object
    char = template;

    char.name = document.getElementById("name").value;
    char.background = document.getElementById("background").value;
    char.powerlevel= document.getElementById("powerlevel").value;
    char.tastiness = document.getElementById("tastiness").value;
    
    //puts new char in the object array
   database.push(char);

   //calls append entry to append new char to document
   append_entry();
}

//
function appendParagraph(text) {
    para = document.createElement("p");
    br = document.createElement("br");
    para.innerText = text;
    databasediv.appendChild(para);
    //databasediv.appendChild(br);
}

//
function append_entry() {
    //adds pharagraphes with the char's atributes 
    appendParagraph("Name: "+char.name);
    appendParagraph("Background: "+char.background)
    appendParagraph("Powerlevel: "+char.powerlevel);
    appendParagraph("Tastiness: "+char.tastiness);

    //adds sepererating line between entries 
    appendParagraph("____________________________");

}




