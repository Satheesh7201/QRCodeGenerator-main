
	// console.log(upiid.value,upimess.value.value.value.value.value,upiname.value.value,amt.value)
	function autoClick(){
        $("#dwnld").click();
      }
      $(document).ready(function(){
        var element = $("#qr-code");

        $("#dwnld").on('click', function(){
           // document.getElementById('downloadsucc').style.display="block";
          // setTimeout(()=>{document.getElementById('downloadsucc').style.display="none";},5000);
          html2canvas(element, {
              onrendered: function(canvas) {
              var imageData = canvas.toDataURL("image/jpg");
              var newData = imageData.replace(/^data:image\/jpg/, "data:application/octet-stream");
             $("#dwnld").attr("download", "Whatsapp view qrcode").attr("href", newData);
             
            }
          });
        });
      });
    // variable declaration here...
	let upiid = document.getElementById("upiid");
	// let color = document.getElementById("color");
	let upiname=document.getElementById("upi_name");
	let upimess=document.getElementById("upi_mess");
	let amt=document.getElementById("amount");
   let err=document.getElementById("error");
	let qrGenerationForm=document.getElementById("generatebtn");
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
	$('#generatebtn').attr('disabled','disabled');
	function invalid(){
      if (amt.value.length === 2) {
         qrGenerationForm.style. animation = "shake 0.2s ease-in-out 0s 2";
         amt.style. animation = "shake 0.2s ease-in-out 0s 2";
         navigator.vibrate([300]);
      	 document.getElementById("error").innerHTML="<b style='color: green;' class='fa fa-check-circle'> Valid Number</b";

      	amt.style.border="2px solid green";
      	// message.style.border="2px solid green";
      	qrGenerationForm.style.cursor="pointer";
			qrGenerationForm.style.background="#1a1aff";
			qrGenerationForm.style.color="black";
			
			$('#generatebtn').removeAttr('disabled');
		}else if (phno.value==="") {
         navigator.vibrate([200]);
        amt.style. animation = "shake 0.2s ease-in-out 0s 2";
      	document.getElementById("error").innerHTML="<b style='color: red;' class='fa fa-exclamation-circle'> Required Field please enter valid mobile number</b";
      	amt.style.border="1px solid red";
     
		}
      else{

        document.getElementById("error").innerHTML="<b style='color: red;' class='fa fa-exclamation-circle'> invalid Number</b";
        document.getElementById("error").style. animation = "shake 0.2s ease-in-out 0s 2";
			document.getElementById('qr-code').style.display="none";
			qrGenerationForm.style.cursor="not-allowed";
			qrGenerationForm.style.color="#999999";

			qrGenerationForm.style.background="#ffe6e6 ";
      	amt.style.border="2px solid red";
      	message.style.border="none";

        document.getElementById('dwnld').style.display="none";
			
			$('#generatebtn').attr('disabled','disabled');
    }};

	
        let loader= document.getElementById('loader') ; 	      
	// Event listener for creating qr click event
	qrGenerationForm.addEventListener("click", function (event) {
     setTimeout(createqr,1300);
      loader.style.display="block";
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
        let qrContentInput=`https://wa.me/+91${phno.value}?text=${encodeURIComponent(message.value)}`;
	

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
	