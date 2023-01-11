//6 If the background color of the is “light blue”, alert “Hello x and y” (x and y are the users in the div)
const div = document.querySelector("div")
console.log(div.style)
const divbackground = getComputedStyle(div).backgroundColor
let users = document.querySelectorAll("li")
console.log('users:',users)

if (divbackground === "rgb(173,216,230)"){
    console.log("this is ligthblue !")
   console.log ('Hello ${users[0].textcontent} and ${users[1].textcontent} !')
}

