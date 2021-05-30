if (localStorage.getItem("yourName")) {
  alert(
    "Добро пожаловать " +
      localStorage.getItem("yourName") +
      "! " +
      "Давно не виделись. В последний раз вы были у нас " +
      localStorage.getItem("date")
  );
  localStorage.setItem(
    "date",
    new Date().toLocaleString("ru", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  );
} else {
  let name = prompt("Добро пожаловать, введите пожалуйста свое имя");
  localStorage.setItem("yourName", name);
  localStorage.setItem(
    "date",
    new Date().toLocaleString("ru", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  );
}
