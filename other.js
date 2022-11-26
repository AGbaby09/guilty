let card = document.querySelectorAll('main div');
console.log(card);
let j;
let m = 50;
for(j=1;j<card.length;j++){
    card[j].style.top= m+'vh';
    m+=50;
}