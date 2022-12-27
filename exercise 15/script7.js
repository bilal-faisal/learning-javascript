const airline = 'Pak International Airline';
const plane = 'AP BLA';

console.log(airline[0]);
console.log(airline[2]);
console.log(airline[4]);

console.log('AP BLA'[0]);
console.log('AP BLA'[4]);

console.log(airline.length);
console.log('AP BLA'.length);

console.log(airline.indexOf('n'));
console.log(airline.lastIndexOf('n'));

console.log(airline.indexOf('Inter'));

console.log(airline.slice(0));
console.log(airline.slice(4));
console.log(airline.slice(0, 3));

console.log(airline.slice(-1));
console.log(airline.slice(-2));
console.log(airline.slice(4, -8));
console.log(airline.slice(1, -1));
console.clear();

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(airline.indexOf('I'), airline.indexOf('l') + 1));

console.log(airline.slice(airline.indexOf(' ') + 1));
console.log(airline.slice(airline.indexOf(' ') + 1, airline.lastIndexOf(' ')));

const checkMiddleSeat = function (seat) {
  // ends with B or E
  const no = seat.slice(-1);
  no === 'E' || no === 'B'
    ? console.log('Middle seat')
    : console.log('Side seat');
};
checkMiddleSeat('123E');
checkMiddleSeat('123B');
checkMiddleSeat('123D');

console.log(new String('Jonas'));
console.log(typeof 'Jonas');
console.log(typeof new String('Jonas'));
console.log(typeof new String('Jonas').slice(1));

const name1 = 'JOnaS';
console.log(name1.toUpperCase());
console.log(name1.toLowerCase());

const name2 = '  Jonas     ';
console.log(name2.length);
console.log(name2.trimStart());
console.log(name2.trimEnd());
console.log(name2.trim());

const convert = function (name) {
  const temp = name.toUpperCase();
  console.log(temp[0] + temp.slice(1).toLowerCase());
};
convert('JOoOOOnAAssSS');

const compare = function (mail) {
  console.log(mail.toLowerCase().trim());
};
compare('   AbC@GMAil.cOM  ');

const price = '23.234$';
const priceRs = price.replace('.', ',').replace('$', 'Rs');
console.log(priceRs);

const accouncement =
  'All passengers come to boarding door 20. I repeat Boarding door 20';

const newAnnouncement1 = accouncement.replace('door', 'gate');
console.log(newAnnouncement1);

const newAnnouncement2 = accouncement.replaceAll('door', 'gate');
console.log(newAnnouncement2);

const currentBatch = 'Batch 50 (Web Dev)';
console.log(currentBatch.includes('49'));
console.log(currentBatch.startsWith('bat'));
console.log(currentBatch.startsWith('Bat'));
console.log(currentBatch.endsWith(')'));

const str = 'A+very+nice+string';
console.log(str.split('+'));

const myName = 'Mr Bilal Faisal';
console.log(myName.split(' '));
console.log(myName.split('a'));

const arr = ['What', 'do', 'you', 'mean?'];
console.log(arr.join(' '));

const [firstName, lastName] = 'Bilal Faisal'.split(' ');
const newName = ['Mr.', firstName, lastName].join(' ');
console.log(newName);

const capitalize = function (name) {
  nameLowerSplit = name.toLowerCase().split(' ');
  const arr = [];
  for (const n of nameLowerSplit) {
    arr.push(n.replace(n[0], n[0].toUpperCase()));
    // arr.push(n[0].toUpperCase() + n.slice(1));
  }
  const capitalizedName = arr.join(' ');
  console.log(capitalizedName);
};
capitalize('biLal faiSAl');
capitalize('mISs AtTitude biTch');

const message = 'What do you mean';
console.log(message.padStart(25, '*'));
console.log(message.padEnd(25, '*'));
console.log(message.padStart(25, '+').padEnd(30, '+'));

const maskCard = function (num) {
  const str = num + '';
  const lastFourDig = str.slice(-4);
  return lastFourDig.padStart(str.length, '*');
};
console.log(maskCard(3467457));
console.log(maskCard(346787654345));

console.clear();

const msg = 'Bad weather... All departures delayed... ';
console.log(msg.repeat(3));

const planeInLine = function (num) {
  console.log(`Currently there are ${num} planes in line ${'🛬'.repeat(num)}`);
};
planeInLine(3);
planeInLine(5);
