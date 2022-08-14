//input from user

const firstnameFild = document.querySelector(".firstnameFild");
const lastnameFild = document.querySelector(".lastnameFild");
const emailFild = document.querySelector(".emailFild");
const password = document.querySelector(".pass");
///soredt input to DashBoard

const firstnameInput = document.querySelector("#firstnameInput");
const lastnameInput = document.querySelector("#lastnameInput");
const emailInput = document.querySelector("#emailInput");
const dynmcDate = document.querySelector("#dynmcDate");
const dynmctime = document.querySelector("#dynmctime");

//display
const sectionRigster = document.querySelector("#sectionRigster");
const ConatinerInfo = document.querySelector(".ConatinerInfo");

//action
const buttonStyle = document.querySelector(".b");
const user = {};
buttonStyle.addEventListener("click", function (e) {
    e.preventDefault();

    const date = new Date();
    const year = `${date.getFullYear()}`.padStart(2, 0);
    const month = `${date.getMonth() + 1}`.padStart(2, 0);
    const day = date.getDate();
    const hour = date.getHours();
    const min = date.getMinutes();
    console.log(min);
    console.log(e);
    firstnameInput.textContent = firstnameFild.value;
    lastnameInput.textContent = lastnameFild.value;
    emailInput.textContent = emailFild.value;
    dynmcDate.textContent = `${day}-${month}-${year}`;
    dynmctime.textContent = `${hour}:${min}`;
    //displt
    sectionRigster.style.display = "none";
    ConatinerInfo.style.display = "block";
    //create object user
    user.Fisrtname = firstnameFild.value;
    user.lastname = lastnameFild.value;
    user.email = emailFild.value;
    user.password = password.value;
    console.log(user);
});
document.querySelector("button").addEventListener("click", function (e) {
    e.preventDefault();
});
//console.log(33);
