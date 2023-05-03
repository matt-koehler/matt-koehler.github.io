
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){

  for(tablink of tablinks){
    tablink.classList.remove("a");
  }

  for(tabcontent of tabcontents){
   // console.log(tabcontent)
    tabcontent.classList.remove("active");
  }

  event.currentTarget.classList.add("a");
  document.getElementById(tabname).classList.add("active");

}

const scriptURL = 'https://script.google.com/macros/s/AKfycbxwRwlhzaBXAgJXvbO1ZdTNlwJT6P7L0PsBT_aM9DUf64fTIvWv7nzgGgAQm7XLP6cc1g/exec'
const form = document.forms['submit']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerHTML = "Message Sent Successfully"
      setTimeout(function(){
        msg.innerHTML = ''
      },5000)
      form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})

const text = document.querySelector(".changeText");

const textLoad = () => {
  setTimeout(() =>{
    text.textContent = "software engineer";
  },0);
  setTimeout(() =>{
    text.textContent = "web developer";
  },4000);
  setTimeout(() =>{
    text.textContent = "computer programmer";
  },8000);
}

textLoad();
setInterval(textLoad,12000);
