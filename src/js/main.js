var triangle = document.getElementById('forpassword');
var triangle2 =document.getElementById('foremail')
triangle.addEventListener('mouseover',function(){
   var popup = document.getElementById('required-password');
    popup.classList.add('show');
});

triangle.addEventListener('mouseout',function(){
   var popup = document.getElementById('required-password');
    popup.classList.remove('show');
});

triangle2.addEventListener('mouseover',function(){
   var popup = document.getElementById('required-email');
    popup.classList.add('show');
});

triangle2.addEventListener('mouseout',function(){
   var popup = document.getElementById('required-email');
    popup.classList.remove('show');
});