//Code for download qrCode here...
function autoClick() {
  $("#dwnld").click();
}
$(document).ready(function () {
  var element = $("#qr-code");

  $("#dwnld").on("click", function () {
    //document.getElementById('downloadsucc').style.display="block";
    // setTimeout(()=>{document.getElementById('downloadsucc').style.display="none";},5000);
    html2canvas(element, {
      onrendered: function (canvas) {
        var imageData = canvas.toDataURL("image/jpg");
        var newData = imageData.replace(
          /^data:image\/jpg/,
          "data:application/octet-stream"
        );
        $("#dwnld").attr("download", "VCard qrcode").attr("href", newData);
      },
    });
  });
});

let phno = document.getElementById("phno");
let name = document.getElementById("name");
let qrGeneration = document.getElementById("generatebtn");

//var a="white";
let qrCode;
function generateQrCode(qrContent) {
  return new QRCode("qr-code", {
    text: qrContent,
    width: 250,
    height: 250,
    colorDark: "#000000",
    colorLight: "#FFFFFF",
    correctLevel: QRCode.CorrectLevel.H,
  });
}
$("#generatebtn").attr("disabled", "disabled");

function invalidphno() {
  if (phno.value.length === 10) {
    qrGeneration.style.animation = "shake 0.2s ease-in-out 0s 2";
    phno.style.animation = "shake 0.2s ease-in-out 0s 2";
    navigator.vibrate([300]);
    document.getElementById("phnoerror").innerHTML =
      "<b style='color: green;' class='fa fa-check-circle'> Valid Number</b";

    phno.style.border = "2px solid green";
    qrGeneration.style.cursor = "pointer";
    qrGeneration.style.background = "#1a1aff";
    qrGeneration.style.color = "black";

    $("#generatebtn").removeAttr("disabled");
  } else if (phno.value === "") {
    navigator.vibrate([200]);
    phno.style.animation = "shake 0.2s ease-in-out 0s 2";
    document.getElementById("phnoerror").innerHTML =
      "<b style='color: red;' class='fa fa-exclamation-circle'> Required Field please enter valid mobile number</b";
    phno.style.border = "1px solid red";
  } else {
    document.getElementById("phnoerror").innerHTML =
      "<b style='color: red;' class='fa fa-exclamation-circle'> invalid Number</b";
    document.getElementById("phnoerror").style.animation =
      "shake 0.2s ease-in-out 0s 2";
    document.getElementById("qr-code").style.display = "none";
    qrGeneration.style.cursor = "not-allowed";
    qrGeneration.style.background = "#ffe6e6";
    phno.style.border = "2px solid red";
    document.getElementById("dwnld").style.display = "none";
    $("#generatebtn").attr("disabled", "disabled");
  }
}
var name_check = /^[A-Za-z]+$/.test(name.value);
function invalidname() {
  console.log(name_check);
  if (
    name.value.length === 2 ||
    name.value.length === 1 ||
    name_check == true
  ) {
    name.style.animation = "shake 0.2s ease-in-out 0s 2";
    navigator.vibrate([300]);
    document.getElementById("nameerror").innerHTML =
      "<b style='color: red;' class='fa fa-exclamation-circle'> invalid Name</b";

    name.style.border = "2px solid red";
    qrGeneration.style.cursor = "pointer";
    qrGeneration.style.background = "#ffe6e6";
  } else if (name.value === "") {
    navigator.vibrate([200]);
    name.style.animation = "shake 0.2s ease-in-out 0s 2";
    document.getElementById("nameerror").innerHTML =
      "<b style='color: red;' class='fa fa-exclamation-circle'> Required Field please enter valid Name</b";
    name.style.border = "1px solid red";
  } else {
    document.getElementById("nameerror").innerHTML =
      "<b style='color: green;' class='fa fa-exclamation-circle'> valid Name</b";
    document.getElementById("nameerror").style.animation =
      "shake 0.2s ease-in-out 0s 2";
    document.getElementById("qr-code").style.display = "none";
    qrGeneration.style.cursor = "not-allowed";
    qrGeneration.style.background = "#ffe6e6";
    qrGeneration.style.color = "#999999";
    name.style.border = "2px solid green";
    document.getElementById("dwnld").style.display = "none";
    $("#generatebtn").attr("disabled", "disabled");
  }
}

let loader = document.getElementById("loader");
// Event listener for creating qr click event
qrGeneration.addEventListener("click", function (event) {
  setTimeout(createqr, 1300);
  loader.style.display = "block";
});
function createqr() {
  document.getElementById("generatesucc").style.display = "block";
  setTimeout(() => {
    document.getElementById("generatesucc").style.display = "none";
  }, 3000);
  autoClick(); // for save qr.jpg
  loader.style.display = "none";
  document.getElementById("qr-code").style.display = "block";
  document.getElementById("dwnld").style.display = "block";
  //let mess=message.value;
  // let crtmess=mess.replaceAll(' ','%20');
  // vcard
  let qrContentInput =
    "BEGIN:VCARD\nVERSION:3.0\nN;CHARSET=UTF-8:;" +
    name.value +
    ";;;\nTEL;TYPE=HOME,VOICE:+91" +
    phno.value +
    "\nEND:VCARD;";

  let qrContent = qrContentInput;
  console.log(qrContent);
  if (qrCode == null) {
    // Generate code initially
    qrCode = generateQrCode(qrContent);
  } else {
    // If code already generated then make
    // again using same object

    qrCode.makeCode(qrContent);
  }
}
