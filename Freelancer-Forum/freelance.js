const container = document.querySelector('.container');
const names = ['Alice','Bob','Carol','Dr.Swag','Teddy Fresh','Dr. Malone'];
const occupations = ['web development','music producer','clothing designer','computer science','registered behavioral technician','unemployeed'];
const prices = [90, 70, 40, 10, 1000, 30];

function randomFreelancer(){ 
    const nameIdx = Math.floor(Math.random()*names.length);
    const occupationsIdx = Math.floor(Math.random()*occupations.length);
    const pricesIdx = Math.floor(Math.random()*prices.length);
    const learn = {    
        name: names[nameIdx],
        occupation: occupations[occupationsIdx],
        price: prices[pricesIdx]
    };
    return learn;
}

const nam = [
    randomFreelancer()
];
console.log(container);

function render(){
    const html = nam.map(function(learn){
        return `<tr><td>${learn.name}</td><td>${learn.occupation}</td><td>${learn.price}</td></tr>`;
    });
    container.innerHTML = html.join('');
}

render();
const interval = setInterval(function(){
const newFreelancer = randomFreelancer();
nam.push(newFreelancer);
render();
    if(nam.length === 10){
        clearInterval(interval);
    }
},500);