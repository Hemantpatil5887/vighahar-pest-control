// document.addEventListener("DOMContentLoaded", function () {
//     // Initialize EmailJS with your user ID
//     emailjs.init("YOUR_USER_ID");
  
//     // Handle the Send button click
//     document.getElementById("send-button").addEventListener("click", function () {
//       const serviceID = "YOUR_SERVICE_ID";
//       const templateID = "YOUR_TEMPLATE_ID";
  
//       // Collect form data
//       const formData = {
//         name: document.getElementById("name").value,
//         email: document.getElementById("email").value,
//         message: document.getElementById("message").value,
//       };
  
//       // Send email
//       emailjs.send(serviceID, templateID, formData)
//         .then(response => {
//           alert("Email sent successfully!");
//           console.log("Success:", response);
//         })
//         .catch(error => {
//           alert("Failed to send email.");
//           console.error("Error:", error);
//         });
//     });
//   });

$('#sendEmail').click((e)=>{
    e.preventDefault();
    const name = $("#name").val();
    const phoneNumber = $("#phoneNumber").val();
    const emailid = $("#emailid").val();
    const message = $("#message").val();
    console.log("Email send - ", {name, phoneNumber, emailid, message});
    
    $("#name").val("");
    $("#phoneNumber").val("")
    $("#emailid").val("")
    $("#message").val("")
  });