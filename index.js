var count = 2;
var n1, n2;
$("#btn1").click(function () {
  if ($("#N1").val() && $("#N2").val()) {
    n1 = +$("#N1").val();
    n2 = +$("#N2").val();
    somma(n1, n2);
  } else alert("fill all the text field");
});
$("#btn2").click(function () {
    if ($("#N1").val() && $("#N2").val()) {
      n1 = +$("#N1").val();
      n2 = +$("#N2").val();
      sottrazzione(n1, n2);
    } else alert("fill all the text field");
  });
  $("#btn3").click(function () {
    if ($("#N1").val() && $("#N2").val()) {
      n1 = +$("#N1").val();
      n2 = +$("#N2").val();
      moltiplicazione(n1, n2);
    } else alert("fill all the text field");
  });
  $("#btn4").click(function () {
    if ($("#N1").val() && $("#N2").val()) {
      n1 = +$("#N1").val();
      n2 = +$("#N2").val();
      divisione (n1, n2);
    } else alert("fill all the text field");
  });


function somma(a, b) {
  console.log("somma", a, b);
  // chiama api somma
  $.ajax("http://localhost:3000/somma?a=" + a + "&b=" + b)
    .done(function (data) {
      console.log("success:", data);
      // chiama la funzione di renderizzazione
      renderizzazione(a, b, "+", data);
    })
    .fail(function (err) {
      console.log("error:", err);
    });
}
  function sottrazzione(a, b) {
    console.log("sottrazzione", a, b);
    // chiama api sottrazzione
    $.ajax("http://localhost:3000/sottrazzione?a=" + a + "&b=" + b)
      .done(function (data) {
        console.log("success:", data);
        // chiama la funzione di renderizzazione
        renderizzazione(a, b, "-", data);
      })
      .fail(function (err) {
        console.log("error:", err);
      });
  }
  function divisione(a, b) {
    console.log("divisione", a, b);
    // chiama api divisione
    $.ajax("http://localhost:3000/divisione?a=" + a + "&b=" + b)
      .done(function (data) {
        console.log("success:", data);
        // chiama la funzione di renderizzazione
        renderizzazione(a, b, "/", data);
      })
      .fail(function (err) {
        console.log("error:", err);
      });
  }
  function moltiplicazione(a, b) {
    console.log("moltiplicazione", a, b);
    // chiama api moltiplicazione
    $.ajax("http://localhost:3000/moltiplicazione?a=" + a + "&b=" + b)
      .done(function (data) {
        console.log("success:", data);
        // chiama la funzione di renderizzazione
        renderizzazione(a, b, "*", data);
      })
      .fail(function (err) {
        console.log("error:", err);
      });
  }
function renderizzazione(n1, n2, sign, res) {
  console.log(
    "strings:",
    localStorage.getItem("trStrings")
  );
  count++;
  // crea la riga della tabella
  var trString =
    "<tr><td>" +
    count +
    "</td><td>" +
    n1 +
    "</td><td>" +
    sign +
    "</td><td>" +
    n2 +
    "</td><td>" +
    res +
    "</td></tr>";
  // la aggiunge al local storage
  localStorage.setItem(
    "trStrings",
    localStorage.getItem("trStrings") + trString
  );
  // la renderizza nella tabella
  $("#table").append(trString);
}

var addFirstLine = (function () {
  if (localStorage.getItem("trStrings")) {
    console.log("bella");
    $("#table").append(localStorage.getItem("trStrings"));
  }
})();
