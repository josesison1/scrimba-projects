
document.getElementById('score1-el').innerHTML = score1 = 8
document.getElementById('score2-el').innerHTML = score2 = 15

const add1 = () => {
    document.getElementById('score1-el').innerHTML = score1 += 1
}

const add2 = () => {
    document.getElementById('score1-el').innerHTML = score1 += 2
}

const add3 = () => {
    document.getElementById('score1-el').innerHTML = score1 += 3
}

const addOne = () => {
    document.getElementById('score2-el').innerHTML = score2 += 1
}

const addTwo = () => {
    document.getElementById('score2-el').innerHTML = score2 += 2
}

const addThree = () => {
    document.getElementById('score2-el').innerHTML = score2 += 3
}

window.onload = function(){
    var min = 11;
    var sec = 59;
    setInterval(function(){
    var a = new Date();
        document.getElementById("countdown").innerHTML = min +" : " + sec ;
        sec--;
        if(sec === 00)
        {
            min--;
            sec = 59;
            if (min === 0)
            {
                min = 11;
            }
        }
        },1000);
}