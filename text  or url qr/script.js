function handleChange(t) {
  var a=t.value;
 if (a==="1") {
  console.log("Text");
   document.getElementById('textdiv').style.display="block";
   document.getElementById('urldiv').style.display="none";

 }
  else if (a==="2") {
  console.log("Url");
   document.getElementById('textdiv').style.display="none";
   document.getElementById('urldiv').style.display="block";
   
 }  else {
    alert("something went Wrong")
 }
  }

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
             $("#dwnld").attr("download", "Location qrcode").attr("href", newData);
             
            }
          });
        });
      });
      // alert("ji")
    // Get form values
    var txt = document.getElementById('text');
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
    // Generate QR code data
let loader= document.getElementById('loader') ;           
    // Event listener for creating qr click event
 qrGeneration.addEventListener("click", function (event) {

        if (txt.value ==="") {
              alert("please Fill The required field");
              txt.focus();
             }
        // else if(txt.value.length >=20){

        //       alert("Maximum characters reached");

        // }
           else{ 

            setTimeout(createqr,1300);
           loader.style.display="block";}
        
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

        let qrContentInput=text.value;
        console.log(qrContentInput)
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
    
    

