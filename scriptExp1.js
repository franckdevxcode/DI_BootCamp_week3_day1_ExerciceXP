 

 
 //2.1 Retrieve the and console.log itdiv
 let mavariable = document.getElementById('container')
 console.log(mavariable);

 //2.2 Change the name “Pete” to “Richard”.
 document.querySelector(".list").children[1].textContent="Richard"

 //2.3 Change each first name of the two to your name.<ul>'s
 let Myvar = document.querySelectorAll(".list")
 Myvar.forEach(list => list.firstElementChild.textContent="diby")
 //2.4 Delete the that contains the text node “Sarah”.<li>
 Myvar[1].children[1].remove()

 // 3 Bonus - Using Javascript:
  // 3.1 Add a class called to both of the .student_list<ul>'s
      Myvar.forEach(list => list.classList.add("student_list"))
     //3.2
    let myclass= document.querySelector('ul.list.student_list')
    myclass.classList.add("university","attendance")