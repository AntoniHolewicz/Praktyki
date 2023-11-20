function pokazZaznaczone() {
    var opcje = document.getElementsByName("wybor");
    var zaznaczoneOpcje = [];

    for (var i = 0; i < opcje.length; i++) {
        if (opcje[i].checked) {
            zaznaczoneOpcje.push(opcje[i].id);
        }
    }

    if (zaznaczoneOpcje.length > 0) {
        document.getElementById("wynik").innerText = "Zaznaczone opcje: " + zaznaczoneOpcje.join(", ");
    } else {
        document.getElementById("wynik").innerText = "Nie zaznaczono żadnej opcji.";
    }
}