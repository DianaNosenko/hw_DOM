// 1. Создайте 10 параграфов и первым трем дайте класс Выделенный текст, который выделяет текст например фоном.
let arrBlueP = document.querySelectorAll('p.pBlue');
arrBlueP.forEach(el => {el.style.backgroundColor = 'blue';})

// 2. Создайте список. В каждый элемент списка напишите текст свой, например дни недели или цвета радуги.
// 2* выделите каждый элемент списка случайным цветом поменяв ему цвет текста или фон
let ul = document.createElement('ul');
document.body.append(ul);

let li1 = ul.appendChild(document.createElement('li'));
let li2 = ul.appendChild(document.createElement('li'));
let li3 = ul.appendChild(document.createElement('li'));
let li4 = ul.appendChild(document.createElement('li'));
let li5 = ul.appendChild(document.createElement('li'));
let li6 = ul.appendChild(document.createElement('li'));
let li7 = ul.appendChild(document.createElement('li'));

li1.innerText = 'Red';
li2.innerText = 'Orange';
li3.innerText = 'Yellow';
li4.innerText = 'Green';
li5.innerText = 'Light Blue';
li6.innerText = 'Blue';
li7.innerText = 'Purple';

li1.style.backgroundColor = 'red';
li2.style.backgroundColor = 'orange';
li3.style.backgroundColor = 'yellow';
li4.style.backgroundColor = 'green';
li5.style.backgroundColor = 'lightblue';
li6.style.backgroundColor = 'blue';
li7.style.backgroundColor = 'purple';



// 3* по просьбе трудящихся :)
// объект Товара (название, цена, другие характеристики ...) создайте карточку
let div = document.createElement('div.container');
document.body.append(div);

let image = document.createElement('img');
image.src = '/iPhone.PNG';
div.append(image);

let h1 = document.createElement('h1');
h1.innerText = 'Основные характеристики Apple iPhone 13 mini 512Gb Blue';
h1.style.fontSize ='36px';
div.append(h1);

let display = document.createElement('p.display');
display.innerText = 'Экран';
display.style.fontSize ='30px';
div.append(display);

let displayUl = document.createElement('ul');
div.append(displayUl);

let displayLi1 = document.createElement('li');
displayLi1.innerText = 'Диагональ дисплея - 5,4'
displayUl.append(displayLi1);
let displayLi2 = document.createElement('li');
displayLi2.innerText = 'Разрешение экрана - 2340х1080'
displayUl.append(displayLi2);
let displayLi3 = document.createElement('li');
displayLi3.innerText = 'Защитное стекло - Ceramic Shield'
displayUl.append(displayLi3);

let connection = document.createElement('p.connection');
connection.innerText = 'Связь';
connection.style.fontSize ='30px';
div.append(connection);

let connectionUl = document.createElement('ul');
div.append(connectionUl);

let connectionLi1 = document.createElement('li');
connectionLi1.innerText = 'Стандарт связи - GSM/CDMA/HSPA/EVDO/LTE/5G'
connectionUl.append(connectionLi1);
let connectionLi2 = document.createElement('li');
connectionLi2.innerText = 'Количество SIM-карт - 1'
connectionUl.append(connectionLi2);

let CPU = document.createElement('p.CPU');
CPU.innerText = 'Процессор/Видеоускоритель';
CPU.style.fontSize ='30px';
div.append(CPU);

let CPUUl = document.createElement('ul');
div.append(CPUUl);

let CPULi1 = document.createElement('li');
CPULi1.innerText = 'Модель процессора - Apple A15 Bionic'
CPUUl.append(CPULi1);
let CPULi2 = document.createElement('li');
CPULi2.innerText = 'Количество ядер - 6 ядер'
CPUUl.append(CPULi2);

let frame = document.createElement('p.frame');
frame.innerText = 'Корпус';
frame.style.fontSize ='30px';
div.append(frame);

let frameUl = document.createElement('ul');
div.append(frameUl);

let frameLi1 = document.createElement('li');
frameLi1.innerText = 'Материал корпуса - металл, стекло'
frameUl.append(frameLi1);
let frameLi2 = document.createElement('li');
frameLi2.innerText = 'Цвет - Голубой'
frameUl.append(frameLi2);
let frameLi3 = document.createElement('li');
frameLi3.innerText = 'Высота - 131,5мм'
frameUl.append(frameLi3);
let frameLi4 = document.createElement('li');
frameLi4.innerText = 'Ширина - 64,2мм'
frameUl.append(frameLi4);
let frameLi5 = document.createElement('li');
frameLi5.innerText = 'Глубина - 7,65мм'
frameUl.append(frameLi5);
let frameLi6 = document.createElement('li');
frameLi6.innerText = 'Вес - 141г'
frameUl.append(frameLi6);
let frameLi7 = document.createElement('li');
frameLi7.innerText = 'Габариты упаковки(ВхШхГ) - 6х2х15 см'
frameUl.append(frameLi7);

let frameLi8 = document.createElement('li');
frameLi8.innerText = 'Комплектация:'
frameUl.append(frameLi8);
let complectationLi1 = document.createElement('ol');
complectationLi1.innerText = '*Смартфон'
frameLi8.append(complectationLi1);
let complectationLi2 = document.createElement('ol');
complectationLi2.innerText = '*Кабель Lightning'
frameLi8.append(complectationLi2);
let complectationLi3 = document.createElement('ol');
complectationLi3.innerText = '*Инструкция'
frameLi8.append(complectationLi3);
let complectationLi4 = document.createElement('ol');
complectationLi4.innerText = '*Гарантийный талон'
frameLi8.append(complectationLi4);