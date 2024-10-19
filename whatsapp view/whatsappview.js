function autoClick() {
  $("#dwnld").click();
}
$(document).ready(function () {
  var element = $("#qr-code");

  $("#dwnld").on("click", function () {
    // document.getElementById('downloadsucc').style.display="block";
    // setTimeout(()=>{document.getElementById('downloadsucc').style.display="none";},5000);
    html2canvas(element, {
      onrendered: function (canvas) {
        var imageData = canvas.toDataURL("image/jpg");
        var newData = imageData.replace(
          /^data:image\/jpg/,
          "data:application/octet-stream"
        );
        $("#dwnld")
          .attr("download", "Whatsapp view qrcode")
          .attr("href", newData);
      },
    });
  });
});
// variable declaration here...
let phno = document.getElementById("phno");
let message = document.getElementById("message");
let qrGenerationForm = document.getElementById("generatebtn");
//var a="white";
let qrCode;
function generateQrCode(qrContent) {
  return new QRCode("qr-code", {
    text: qrContent,
    width: 200,
    height: 200,
    colorDark: "#000000",
    colorLight: "#FFFFFF",
  });
}
$("#generatebtn").attr("disabled", "disabled");
function invalid() {
  if (phno.value.length === 10) {
    qrGenerationForm.style.animation = "shake 0.2s ease-in-out 0s 2";
    phno.style.animation = "shake 0.2s ease-in-out 0s 2";
    navigator.vibrate([300]);
    document.getElementById("error").innerHTML =
      "<b style='color: green;' class='fa fa-check-circle'> Valid Number</b";

    phno.style.border = "2px solid green";
    message.style.border = "2px solid green";
    qrGenerationForm.style.cursor = "pointer";
    qrGenerationForm.style.background = "#1a1aff";
    qrGenerationForm.style.color = "black";

    $("#generatebtn").removeAttr("disabled");
  } else if (phno.value === "") {
    navigator.vibrate([200]);
    phno.style.animation = "shake 0.2s ease-in-out 0s 2";
    document.getElementById("error").innerHTML =
      "<b style='color: red;' class='fa fa-exclamation-circle'> Required Field please enter valid mobile number</b";
    phno.style.border = "1px solid red";
  } else {
    document.getElementById("error").innerHTML =
      "<b style='color: red;' class='fa fa-exclamation-circle'> invalid Number</b";
    document.getElementById("error").style.animation =
      "shake 0.2s ease-in-out 0s 2";
    document.getElementById("qr-code").style.display = "none";
    qrGenerationForm.style.cursor = "not-allowed";
    qrGenerationForm.style.color = "#999999";

    qrGenerationForm.style.background = "#ffe6e6 ";
    phno.style.border = "2px solid red";
    message.style.border = "none";

    document.getElementById("dwnld").style.display = "none";

    $("#generatebtn").attr("disabled", "disabled");
  }
}

let loader = document.getElementById("loader");
// Event listener for creating qr click event
qrGenerationForm.addEventListener("click", function (event) {
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
  let qrContentInput = `https://wa.me/+91${
    phno.value
  }?text=${encodeURIComponent(message.value)}`;

  //urlshow-------------
  urlshow("urlshow", qrContentInput);
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
