function mixedMessages(){
    var rndm = Math.floor(Math.random() * 3);
    
    switch(rndm){
        case 0:
            console.log("Hello World!");
            break;
        case 1:
            console.log("Welcome to coding.");
            break;
        case 2:
            console.log("Programming is fun.");
            break;
    }
}

mixedMessages();