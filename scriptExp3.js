//2  In the , change the value of the id attribute from navBar to socialNetworkNavigation, using the method.<div>setAttribute

let navbar = document.getElementById("navBar")
navbar?.setAttribute("id","socialNetworkNavigation")

//3.1 First, create a new tag (use the method).
const li = document.createElement("li")
console.log('li:',li)
// 3.2 Create a new text node with “Logout” as its specified text.
const logout = document.createTextNode("Logout")
console.log('logout:',logout)

// 3.3 Append the text node to the newly created list node () <li>
li.appendChild(logout)
console.log('li:',li)
// 3.4 Finally, append this updated list node to the unordered list (), using the method.<ul>appendChild
const ul = navbar?.firstElementChild
ul?.appendChild(li)

//4 Use the and the properties to retrieve the first and last elements from their parent element (). 
const firstLi = ul?.firstElementChild
console.log('firstLi:',firstLi)
const LastLi = ul?.lastElementChild
console.log('LastLi:',LastLi)
// Display the text of each link. (Hint: use the property).
console.log("first li content")
console.log(firstLi?.textContent)

console.log("second li content")
console.log( LastLi?.textContent)