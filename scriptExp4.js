//2  In the , change the value of the id attribute from navBar to socialNetworkNavigation, using the method.<div>setAttribute

const allbooks = []


/*title,
author,
image : a url,
alreadyRead : which is a boolean (true or false).*/
const book1 = {
    title: "Harry potter",
    author:"J.K Rowling",
    image: "https://picsum.photos/200",
    alreadyRead : false
}

const book2 = {
    title: "Lor of the kings",
    author:"J.K Rowling",
    image: "https://picsum.photos/200",
    alreadyRead : false
}
// 3 Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)
allbooks.push(book1,book2)
console.log('alboks:',allbooks)

4// Requirements : All the instructions below need to be coded in the js file:
   //1.
   const table = document.createElement("table")
   table.innerHTML = 
   <table>
   <thead>
   <tr>
     <th colspan="3">My Book List</th>
   </tr>
</thead>
   <body>
   <tr>
      <td> ${book1.title} writen by ${book1.author} </td>
      <td>${book1.image}</td>
      <td> already Read ${book1.alreadyRead}</td>
   </tr>
 </body>
 </table>
  const BooklistDiv =  document.querySelector("list-books")
  console.log('BooklistDiv:',BooklistDiv)
  BooklistDiv?.appendChild(table)
