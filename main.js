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
  new Goods("1", "15", "СВЕТР 'воол'(M)", "190", "140", "95"),
  new Goods("2", "7", "СВЕТР 'дж. модо полоска'(M)", "270", "202", "135"),
  new Goods("3", "80", "СВЕТР 'тонк меланж'(S-M)", "225", "170", "115"),
  new Goods("4", "14", "СВЕТР 'вип буквы'(M,L)", "240", "180", "120"),
  new Goods("5", "79", "СВЕТР 'дж. байа'(M,L)", "200", "150", "100"),
  new Goods("6", "35", "СВЕТР 'кулис без вор'(M)", "210", "160", "105"),
  new Goods("7", "104", "СВЕТР 'ямак бот'(XXXL)", "500", "375", "250"),
  new Goods("8", "141", "СВЕТР 'форис изн'(M)", "310", "235", "155"),
  new Goods("9", "59", "СВЕТР 'трико ряб'(L)", "190", "140", "95"),
  new Goods("10", "6", "СВЕТР 'тонк бот'(4XL)", "340", "255", "170"),
  new Goods("11", "145", "СВЕТР 'бот светл'(5XL,5XL)", "170", "125", "85"),
  new Goods("12", "60", "КОФТА 'боб локотон'(4XL,5XL)", "200", "150", "100"),
  new Goods("13", "65", "КОФТА 'фибак ворот'(4XL)", "330", "245", "165"),
  new Goods("14", "77", "КОФТА'фибак боб'(4XL,5XL)", "310", "230", "155"),
  new Goods("15", "81", "КОФТА 'руб маду'(L,L)", "250 ", "185", "125"),
  new Goods("16", "71", "КОФТА 'кардиган краков'(M)", "285", "215", "140"),
  new Goods("17", "78", "КОФТА 'обманка маду'(M)", "200", "150", "100"),
  new Goods("18", "74", "КОФТА 'боб МЦС'(M)", "165", "125", "80"),
  new Goods("19", "110", "КОФТА'карди. рябой'(M,L)", "290", "220", "145"),
  new Goods("20", "116", "КОФТА 'бондю дл рук'(5XL)", "200", "150", "100"),
  new Goods("21", "125", "КОФТА 'карди. стеноо'(M)", "300", "225", "150"),
  new Goods("22", "85", "КОФТА 'adidas'(M,L)", "190", "140", "95"),
  new Goods("23", "59", "РУКАВИЧКИ 'єлекс'(жін. 5шт)", "35", "25", "18"),
  new Goods("24", "51", "РУКАВИЧКИ 'класик'(жін. 3шт)", "30", "22", "15"),
  new Goods("25", "52", "РУКАВИЧКИ 'тонкие'(жін. 3шт)", "15", "11", "7"),
  new Goods("26", "48", "РУКАВИЧКИ 'флисс'(жін. 3шт)", "45", "34", "22"),
  new Goods("27", "1", "ПІДШТАНИКИ(3XL,3XL,4XL,4XL)", "70", "52", "35"),
  new Goods("28", "97", "ФУТБОЛКА 'камени'(XL)","180" , "135", "90"),
  new Goods("29", "108", "ФУТБОЛКА 'єлвис бот'(5XL)", "170", "127", "85"),
  new Goods("30", "101", "ФУТБОЛКА 'краков бел\гол'(M)", "70", "52", "35"),
  new Goods("31", "94", "ФУТБОЛКА 'поло муз '(L)", "165", "125", "82"),
  new Goods("32", "0", "ФУТБОЛКА ''(L)", "210", "155", "105"),
  new Goods("33", "83", "ФУТБОЛКА 'ромикс бот'(3XL)", "120", "90", "60"),
  new Goods("34", "62", "ФУТБОЛКА 'х-стори'(L)", "165", "125", "82"),
  new Goods("35", "33", "ФУТБОЛКА 'евро'(1XL,2XL)", "75", "55", "37"),
  new Goods("36", "32", "ФУТБОЛКА 'мостов'(M)", "120", "90", "60"),
  new Goods("37", "28", "ФУТБОЛКА 'форсе'(XL)", "130", "97", "65"),
  new Goods("38", "24", "ФУТБОЛКА 'дизель'(L, М)", "145", "110", "72"),
  new Goods("39", "0", "ФУТБОЛКА ''(3XL,5XL)", "180", "135", "90"),
  new Goods("40", "138", "ФУТБОЛКА 'сетка'(S)", "100", "75", "50"),
  new Goods("41", "130", "ФУТБОЛКА 'варенка бот'(3XL)", "150", "112", "75"),
  new Goods("42", "127", "ФУТБОЛКА 'без.рук марлева '(4XL)", "130", "97", "65"),
  new Goods("43", "126", "ФУТБОЛКА 'без.рук комеор '(М,XL)", "125", "94", "62"),
  new Goods("44", "118", "ФУТБОЛКА 'марл гол'(3XL,5XL)", "160", "120", "80"),
  new Goods("45", "113", "ФУТБОЛКА 'фила'(S)", "100", "75", "50"),
  new Goods("46", "111", "ФУТБОЛКА 'краков однот '(2XL)", "135", "100", "67"),
  new Goods("47", "0", "ФУТБОЛКА ''(S)", "140", "105", "70"),
  new Goods("48", "0", "ФУТБОЛКА ''(L)", "150", "112", "75"),
  new Goods("49", "42", "ФУТБОЛКА 'бондю-томми'(S,S)", "160", "120", "60"),
  new Goods("50", "26", "БЕЗРУК 'ната белая' (L)", "60", "45", "30"),
  new Goods("51", "50", "МАЙКА 'борц цветная'(M,M)", "60", "45", "30"),
  new Goods("52", "57", "МАЙКА 'борц рукл'(XL)", "90", "67", "45"),
  new Goods("53", "112", "СОРОЧКА 'безрук сирен'(M) ", "100", "75", "50"),
  new Goods("54", "30", "СОРОЧКА 'с.порт кл'(M, М) ", "175", "130", "87"),
  new Goods("55", "0", "КОФТА 'сорочка ворот' (S)", "300", "225", "150"),
  new Goods("56", "39", "ШОРТИ 'пл. бот'(2XL,3XL)", "80", "60", "40"),
  new Goods("57", "31", "ШОРТИ 'дж'(u-008 44)", "300", "225", "150"),
  new Goods("58", "14", "НАБАОР 'bobo'(XL)", "85", "60", "42")
];



class EmpTable {
  constructor(arr) {
    let table = document.querySelector("table");
    for (let i = 0; i < arr.length; i++) {
      this.tr = document.createElement("tr");
      this.td = document.createElement("td");
      //this.td.innerHTML = `${arr[i].number} <span class="span-past_num">(${arr[i].pastNum})</span>`            "communication with old accounting"
      this.td.innerText = arr[i].number;
      this.tr.appendChild(this.td);

      this.td = document.createElement("td");
      let arrName = arr[i].name.split('');
      let nameRemainder = arrName.splice(arr[i].name.indexOf('\''))
      this.td.innerHTML = `<span class="td_name"><span>${arrName.join('')}</span><span>${nameRemainder.join('')}</span></span>`
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

