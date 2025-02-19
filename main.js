function sendToWhatsApp() {
    let number = document.getElementById("whatsappNumber").value.trim();
    let message = document.getElementById("outputText").innerText;

    if (number === "") {
        alert("087872830557");
        return;
    }

    if (number.startsWith("0")) {
        number = "62" + number.substring(1);
    }

    let whatsappURL = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;


    window.open(whatsappURL, "_blank");
}
document.querySelector(".whatsapp-button").addEventListener("click", sendToWhatsApp);

function makeItAngry() {
    let userInput = document.getElementById("inputText").value
    let textBesar = userInput.toUpperCase()
    console.log(textBesar)

    document.getElementById("outputText").innerText = textBesar


}

let buttonAngry = document.getElementById("buttonAngry")
buttonAngry.addEventListener("click", makeItAngry )
