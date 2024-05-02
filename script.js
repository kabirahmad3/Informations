document.getElementById("infoForm").addEventListener("submit", function (e) {
    e.preventDefault(); 
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var email = document.getElementById("email").value;
    var displayDiv = document.getElementById("displayData");
    displayDiv.innerHTML = "<h2>Submitted Data:</h2>" +
                           "<p><strong>Name:</strong> " + name + "</p>" +
                           "<p><strong>Age:</strong> " + age + "</p>" +
                           "<p><strong>Email:</strong> " + email + "</p>";
});
