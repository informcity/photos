let wrapper = document.querySelector('#wrapper');
let wrapFlex = document.querySelector('.wrapper-flex');

function removeWrapper(){
   wrapper.className ="display-none"
}

document.body.addEventListener('click', (e) => {
  if (e.target.constructor.name == 'HTMLAnchorElement'){
    wrapper.className = "wrapper";
    wrapFlex.innerHTML = `<img src="./img/${e.target.id}1.jpg"><img src="./img/${e.target.id}2.jpg">`
  }
});

/*form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(form.name.value);
  wrapper.className = "wrapper";
  wrapFlex.innerHTML = `<h1>new Goods("${form.number.value}", "${form.pastNum.value}", "${form.name.value}", "${form.price.value}", "${form.price75.value}", "${form.price50.value}")</h1>`;
  form.reset(); 
});*/

let sum = [ 240, 200, 170, 200, 310, 250, 290, 190, 320, 210, 75, 145, 180, 125, 160, 160, 60, 175, 80];
console.log((arrGoods.reduce((acum, item) => acum + +item.price, 0)) + (sum.reduce((s,i)=> s+i, 0)));


