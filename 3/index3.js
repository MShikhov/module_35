function useRequest(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);

  xhr.onload = function () {
    if (xhr.status != 200) {
      console.log("Статус ответа: ", xhr.status);
    } else {
      const result = JSON.parse(xhr.response);
      if (callback) {
        callback(result);
      }
    }
  };

  xhr.onerror = function () {
    console.log("Ошибка! Статус ответа: ", xhr.status);
  };

  xhr.send();
}
const resultNode = document.querySelector(".result");
const btnNode = document.querySelector(".btn");
const yearNode = document.querySelector(".year");
function displayResult() {
  //обработка json`a

  console.log(yearNode.value);
}

btnNode.addEventListener("click", () => {
  useRequest(
    "https://my.api.mockaroo.com/revenue_2017-2019.json?key=fd36b440",
    displayResult
  );
});
