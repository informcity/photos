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
  new Goods("1", "15", "Свр. воол  (M)", "190", "140", "95"),
  new Goods("2", "7", "Свр. дж. модо полоска (M)", "270", "202", "135"),
  new Goods("3", "80", "Свр тонк меланж (S-M)", "225", "170", "115"),
  new Goods("4", "14", "Свр. вип буквы (M, L)", "240", "180", "120"),
  new Goods("5", "79", "Свтр дж. байа (M, L)", "200", "150", "100"),
  new Goods("6", "35", "Свр. кулис без вор син (M)", "210", "160", "105"),
  new Goods("7", "104", "Свр. ямак бот (XXXL)", "500", "375", "250"),
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

