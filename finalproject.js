// Upload picture beginning
let profilePic = document.getElementById("profile");
let inputFile = document.getElementById("input-file");

inputFile.onchange = function(){
    profilePic.src = URL.createObjectURL(inputFile.files[0]);
}