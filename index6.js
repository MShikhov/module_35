const myNumber = Math.floor(Math.random() * (100 - 1) + 1);
const myPromise = new Promise((resolve, reject) => {
  if (myNumber % 2 === 0) {
    resolve("Успешное выполнение promise");
  } else {
    reject("Неуспешное выполнение promise");
  }
})
  .then((result) => {
    console.log("Завершено успешно. Сгенерированное число —", myNumber);
  })
  .catch((result) => {
    console.log("Завершено с ошибкой. Сгенерированное число —", myNumber);
  });
