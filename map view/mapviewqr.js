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
        $("#dwnld").attr("download", "Location qrcode").attr("href", newData);
      },
    });
  });
});
// alert("ji")
// Get form values
var address = document.getElementById("location");
let qrGeneration = document.getElementById("generatebtn");

//var a="white";
let qrCode;
// Generate QR code using QRCode.js library

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
// Generate QR code data
let loader = document.getElementById("loader");
// Event listener for creating qr click event
qrGeneration.addEventListener("click", function (event) {
  if (address.value === "") {
    alert("please Enter address...");
    address.focus();
  } else {
    setTimeout(() => {
      alert(
        "NOTE : Sometimes The Map view doesn't work Properly \nif you enter the input incorrectly.\n So, confirm your address."
      );
    }, 1000);

    setTimeout(createqr, 1300);
    loader.style.display = "block";
  }
});

function createqr() {
  let direction = document.getElementById("direction");

  if (direction.checked == true) {
    console.log("selected direction");
    var qrContentInput = `https://www.google.com/maps/dir/?api=1&origin=&destination=${encodeURIComponent(
      address.value
    )}`;
  } else {
    console.log("selected direction");
    var qrContentInput = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      address.value
    )}`;
  }
  //url show
  urlshow("urlshow", qrContentInput);
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

  // let qrContentInput=`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address.value)}`;
  // let qrContentInput=`https://www.google.com/maps/dir/?api=1&origin=&destination=${encodeURIComponent(address.value)}`;
  console.log(qrContentInput);
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

//  function copyText() {
//   // Get the text field
//   // var copyText = document.getElementById("myInput");

//   // Copy the text inside the text field
//   navigator.clipboard.writeText(qrContent);

//   // Alert the copied text
//   alert("Copied the text: " + qrContent);
// }
