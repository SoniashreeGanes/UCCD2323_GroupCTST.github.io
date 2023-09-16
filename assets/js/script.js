let popUp = document.getElementById("cookiePopup");
//when user clicks the accept button
document.getElementById("acceptCookie").addEventListener("click", () => {
    //create date object
    let d = new Date();
    //Increment the current time by 1 minute (cookie will expire in 1 minute)
    d.setMinutes(2 + d.getMinutes());
    //Create Cookie withname = myCookieName, value = thisIsMyCookie and expiry time=1 minute
    document.cookie = "myCookieName=thisIsMyCookie; expires=" + d.toUTCString() + ";";

    //Hide the popup
    popUp.classList.add("hide");
    popUp.classList.remove("show");
});
//check if the cookie is already present
const checkCookie = () => {
    //Read the cookie and split on "="
    let input = document.cookie.split("=");
    //Check our cookie
    if (input[0] == "myCookieName") {
        //Hide the popup
        popUp.classList.add("hide");
    popUp.classList.remove("show");
    }
    else{
         //Show the popup
         popUp.classList.add("show");
         popUp.classList.remove("hide");
    }
}
//Check if cookies exist when page loads
window.onload = () =>{
    setTimeout(() => {
        checkCookie();
    }, 2000);
};