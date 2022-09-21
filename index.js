var form = document.getElementById('sheetdb-form');
form.addEventListener("submit", e => {
  e.preventDefault();
  fetch(form.action, {
    method: "POST",
    body: new FormData(document.getElementById("sheetdb-form")),
  }).then(
    response => response.json()
  ).then((html) => {
    // you can put any JS code heres
    // window.open('page2.html', '_blank');
    window.alert("表單已送出！敬請靜待回覆。");
    document.getElementById("sheetdb-form").reset();
  });
});
$("#sidebarButton").click(function () {
  $("#sidebarButton i").toggleClass("fa-bars");
  $("#sidebarButton i").toggleClass("fa-xmark");
  $("#sidebar").slideToggle();
  $("main").toggleClass("blur");
});
$("#sidebar a").click(function(){
  $("#sidebar").slideUp(1000);
  $("main").removeClass("blur");
})