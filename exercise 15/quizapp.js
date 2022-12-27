const question = new Map([
  ['question1', 'Most used programming language in web?'],
  [1, 'C++'],
  [2, 'Java'],
  [3, 'JavaScript'],
  [4, 'Python'],
  ['correct', 3],
  [true, 'Correct :D'],
  [false, 'Try Again :( '],
]);

console.log(question.get('question1'));

for (const [key, val] of question) {
  if (typeof key === 'number') {
    console.log(`Answer ${key}: ${val}`);
  }
}

const answer = Number(
  prompt(
    question.get('question1') +
      '\r\n1 for ' +
      question.get(1) +
      '\r\n2 for ' +
      question.get(2) +
      '\r\n3 for ' +
      question.get(3) +
      '\r\n4 for ' +
      question.get(4)
  )
);
console.log(`Given Answer: ${answer}`);

console.log(question.get(answer === question.get('correct')));
