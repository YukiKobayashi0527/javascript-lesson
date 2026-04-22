let nickname = 'ごっしー';
let age = '28';
console.log("私のニックネームは" + nickname + "です。"+"年齢は" + age + "歳です。");

let languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];
let templatetext = `私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`;
console.log(templatetext);

let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};
console.log(user.age);

let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];

const result = playerList.find(item => item.favorites = 'The Legend of Zelda');
console.log(result);

function averageage(playerList){
  const totalage = playerList.reduce((sum, user) => sum + user.age, 0);
  return totalage / playerList.length;
}

const average = averageage(playerList);
console.log(average)

function sayHello() {
    console.log('Hello')
  };
sayHello();

const sayWorld = function() { // 名前のない関数（無名関数）を変数define2に代入
  console.log('World')
};
sayWorld();

user.birthday = '2000-09-27';
user.sayHello = sayHello();
console.log(user);

let calc = {};

function add(x,y) {
  calc.add = x + y;
};

function subtract(x,y) {
   calc.subtract = x - y;
};

function multiply(x,y) {
   calc.multiply = x * y;
};

function divide(x,y) {
   calc.divide = x / y;
};

add(3,4);
subtract(15,5);
multiply(7,7);
divide(10,2);
console.log(calc);

function remainder(x,y) {
  const surplus = x % y;
  console.log(x + 'を' + y + 'で割った余りは' + surplus + 'です。')
};

remainder(5,3);


 //スコープ外から参照しようとしたためエラーになっている。

let random = Math.floor(Math.random() * 10);
console.log(random);

const hello3 = function(){
  console.log("Hello World!");
}
setTimeout(hello3, 3000);

function printName(firstName, formatter) {
  console.log(formatter(firstName));
}

const addIntro = (name) => '私の名前は' + name + 'です。';

printName('小林', addIntro)


let num = 0;
if (num > 0) {
  console.log('num is greater than 0')
} else if (num < 0) {
  console.log('num is less than 0')
} else if (num === 0) {
  console.log('num is 0')
};

let numbers = [];
for (let i = 0; i < 100; i++) {
  numbers.push(i);
}
console.log(numbers);

let mixed = [4, '2', 5, '8', '9', 0, 1];
for (let n = 0; n < mixed.length; n++) {
  const contents = mixed[n];
  if (typeof contents !== 'number') {
    console.log('not number');
  } else if (contents % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}