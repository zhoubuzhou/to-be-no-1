let r = prompt("who's there?");
if (r === 'Admin') {
    d = prompt('Password?');
    if (d === 'themaster') {
        console.log('Welcome!');
    } else if (d === null) {
        console.log('Canceled');
    }else{
        console.log('Wrong password');
    }
}else if (r === null){
    console.log('Canceled');
}else {
    console.log("I don't know you");
}