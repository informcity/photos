class Goods {
  constructor(number, pastNum, name , price, price75, price50) {
    this.number = number;
    this.pastNum = pastNum;
    this.name = name;
    this.price = price;
    this.price75 = price75;
    this.price50 = price50;
  }
}

let arrGoods = [
  new Goods("1", "59", "female gghftttt", "300", "225", "150"),
  new Goods("1", "2", "3", "4", "5", "6"),
];

class EmpTable {
  constructor(arr) {
    let table = document.querySelector("table");
    for (let i = 0; i < arr.length; i++) {
      this.tr = document.createElement("tr");
      this.td = document.createElement("td");
      this.td.innerHTML = `${arr[i].number} <span class="span-past_num">(${arr[i].pastNum})</span>`
     // this.td.innerText = arr[i].number +`(${arr[i].pastNum})`;
      this.tr.appendChild(this.td);
      this.td = document.createElement("td");
      this.td.innerText = arr[i].name;
      this.tr.appendChild(this.td);
      this.td = document.createElement("td");
      this.td.innerText = arr[i].price;
      this.tr.appendChild(this.td);
      this.td = document.createElement("td");
      this.td.innerText = arr[i].price75;
      this.tr.appendChild(this.td);
      this.td = document.createElement("td");
      this.td.innerText = arr[i].price50;
      this.tr.appendChild(this.td);
      this.td = document.createElement("td");
      this.td.innerHTML = `<a id="${arr[i].number}">ФОТО</a>`;
      this.tr.appendChild(this.td);
      table.appendChild(this.tr);
    }
  }
}

new EmpTable(arrGoods);

