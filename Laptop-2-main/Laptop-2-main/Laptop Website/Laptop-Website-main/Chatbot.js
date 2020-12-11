   

function talk(){
    var input = document.getElementById('input').value;
    document.getElementById('input').value = "";
    document.getElementById('chatbotanswer').innerHTML += user + "<br>"
}

if (user in know){
    document.getElementById('chatbotanswer').innerHTML += know[input] + "<br>"   
}

else{
    document.getElementById('chatbotanswer').innerHTML += "Sorry, I don't understand", "<br>";
}

know = {

    "Hello" : "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  Hi there!",
    "hello" : "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  Hi there!",
    "HELLO" : "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  Hi there!",
    "Who are you?" : "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp I am Nikhil's Assistant",
    "How are you?" : "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp I am Fine",
    "How old are you?" : "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp I am infinity in age"
} 