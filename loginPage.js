function check(form) {
   
   if(form.userid.value == "Filip" && form.password.value == "123") 
   {
      window.open("https://www.youtube.com/")
   }
   else 
   {
      alert("Username or password does not match!")
   }
}
