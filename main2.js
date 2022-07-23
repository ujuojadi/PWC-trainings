const myForm = document.querySelector("#my-form");
let fname = document.querySelector('#fname');
let sname = document.querySelector('#sname');
let age = document.querySelector('#age');
let gender = document.querySelector("input[name='gender']:checked");
console.log('gender')
let cont= document.querySelector('.container')
let msg = document.querySelector('#msg')
// console.log(document.querySelector("#fname"))

myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();
  if (fname.value === "" || sname.value === "" || age.value==='' ) {
    msg.classList.add("error");
    msg.innerHTML = "Please enter your firstName and secondName";
    setTimeout(() => msg.remove(), 5000);
  } else {

    const li = document.createElement("li");
    console.log(li)
    // cont.appendChild(
    //     document.createTextNode(`${fname.value} : ${sname.value}`)
    //   );
    //   userList.appendChild(li);
    //   fname.value = "";
    //   sname.value = "";
    // }
    li.appendChild(
      document.createTextNode(`${fname.value} : ${sname.value}:${age.value} : ${gender.value}`)
    );
    console.log(li)
    cont.appendChild(li);
    fname.value = "";
    sname.value = "";
    age.value = "";
  
}}

// fname.addEventListener('input', (e)=>{
//     document.querySelector('.container').append(fname.value)
// });


// sname.addEventListener('input', (e)=>{
//     document.querySelector('.container').append(sname.value)
// });


// fname.addEventListener('input', (e)=>{
//     document.querySelector('.container').append(age.value)
// })