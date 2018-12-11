// Woordenlijst Leiden blz 1-2
let wordsGerman = ['auch', ['außerdem', 'zudem', 'zusätzlich', 'hinzu kommt'], 'ebenfalls'];
let wordsDutch = ['ook', 'bovendien', ['eveneens', 'ook']];

let wordlistInput = wordsGerman;
let wordlistOutput = wordsDutch;

let inputField, query, answer, correctAnswers = 0,
  totalAnswers = 0,
  sleep = 120,
  frameCountSleep, i, j;

function setup() {
  createCanvas(400, 400);
  inputField = createInput();
  inputField.position(width / 2 - 83 / 2, height + 15);
  getQuery();
}

function draw() {
  background(220);
  textSize(24);

  text(query, width / 2 - 50, height / 4);
  text(correctAnswers + '/' + totalAnswers, width / 2 - 50, height / 2);
  if (frameCount < frameCountSleep) {
    text(answer, width / 2 - 50, height / 4 * 3);
  }
}

function getQuery() {
  query = random(wordlistInput);
  i = wordlistInput.indexOf(query);

  if (Array.isArray(query)) {
    temp = random(query);
    j = query.indexOf(temp);
    query = temp;
  }
}

function getAnswer() {
  if (inputField.value()) {
    totalAnswers++;

    if (Array.isArray(wordlistOutput[i])) {
      if (inputField.value().indexOf(wordlistOutput[i])) {
        correctAnswers++;
      } else {
        frameCountSleep = sleep + frameCount;
      }
    } else {
      answer = wordlistOutput[i];
      if (inputField.value() === answer) {
        correctAnswers++;
      } else {
        frameCountSleep = sleep + frameCount;
      }
    }

    getQuery()
    inputField.value('');
  }
}

function keyPressed() {
  switch (keyCode) {
    case 13: // enter
      getAnswer();
      break;
  }
}