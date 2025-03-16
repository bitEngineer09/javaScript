const clock = document.querySelector('#clock')

// aise time ko console me refresh karna padega
// let dateTime = new Date()
// console.log(dateTime.toLocaleTimeString());

// so hum aise fn lenge jise hum khud control kar sake
// two parameters pass karte hai
setInterval(function(){
    let dateTime = new Date()
    clock.innerHTML = dateTime.toLocaleTimeString()
}, 1000)