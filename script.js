const date = document.querySelector('#date')
const email = document.querySelector('#email')
const text = document.querySelector('#text')
const option = document.querySelector('#sel')
const form = document.querySelector('form')
date.addEventListener('focus',(e)=>{
 console.log(e)
 date.type = "date"
})
const sendMail = ()=>{
  const params = {
    name: text.value,
    email: email.value,
    date: date.value,
    option:option.options[option.selectedIndex].text,
  }
  const serviceID ="service_tktn42a"
const templateID = "template_9xwwg49"
emailjs.send(serviceID,templateID,params).then((res)=>{
  text.value=""
  email.value=""
  date.value=""
  option.options[option.selectedIndex].text="Type of Services"
  alert("appointment booked")
}).catch(err=>console.log(err))
}
form.addEventListener('submit',(e)=>{

e.preventDefault()
  sendMail()
})

