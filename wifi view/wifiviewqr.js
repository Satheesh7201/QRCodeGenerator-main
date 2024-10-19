//Code for download qrCode here...
function autoClick(){
        $("#dwnld").click();
      }
      $(document).ready(function(){
        var element = $("#qr-code");

        $("#dwnld").on('click', function(){
           //document.getElementById('downloadsucc').style.display="block";
          // setTimeout(()=>{document.getElementById('downloadsucc').style.display="none";},5000);
          html2canvas(element, {
              onrendered: function(canvas) {
              var imageData = canvas.toDataURL("image/jpg");
              var newData = imageData.replace(/^data:image\/jpg/, "data:application/octet-stream");
             $("#dwnld").attr("download", "wifi qrcode").attr("href", newData);
             
            }
          });
        });
      });
      // alert("ji")
    // Get form values
    var ssid = document.getElementById('ssid');
    var password = document.getElementById('password');
    var security = document.getElementById('security');
    let qrGeneration=document.getElementById("generatebtn");
    
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
        correctLevel : QRCode.CorrectLevel.H
    });
    }
    // $('#generatebtn').attr('disabled','disabled');
   
    // Generate QR code data
let loader= document.getElementById('loader') ;           
    // Event listener for creating qr click event
    qrGeneration.addEventListener("click", function (event) {
      if (ssid.value==="") {
         alert("please Enter the SSID Name");
         ssid.focus();
     }else{
        setTimeout(createqr,1300);
      loader.style.display="block";
  }

    ;});    
     function createqr(){
        document.getElementById('generatesucc').style.display="block";
        setTimeout(()=>{document.getElementById('generatesucc').style.display="none";},3000);
          autoClick() // for save qr.jpg 
              loader.style.display="none";
        document.getElementById('qr-code').style.display="block";
        document.getElementById('dwnld').style.display="block";
     //let mess=message.value;
       // let crtmess=mess.replaceAll(' ','%20');
        // vcard 
        var qrData = 'WIFI:S:' + ssid.value + ';T:' + security.value + ';';
       if (password) {
           qrData += 'P:' + password.value + ';';
        }
        let qrContentInput=qrData;
    let qrContent = qrContentInput;
    console.log(qrContent)
    if (qrCode == null) {

// Generate code initially
        qrCode = generateQrCode(qrContent);
    } else {
        
        // If code already generated then make
        // again using same object
        
        qrCode.makeCode(qrContent);
    }}
    
    



