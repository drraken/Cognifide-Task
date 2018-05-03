var triangle = document.getElementById('forpassword');
var triangle2 = document.getElementById('foremail');
var popup = document.getElementById('required-password');
var popup2 = document.getElementById('required-email');
var emailInputbox = document.getElementById('emailbox');
var submitButton = document.getElementById('loginbutton');
var emailParagraph = document.getElementById('emailParagraph');

var triangle3 =document.getElementById('forReset');
var popup3 = document.getElementById('required-reset');

function wrappingIndex() {
    if (triangle == null || triangle2 == null || popup == null || popup2 == null || emailInputbox == null || submitButton == null || emailParagraph == null) {

    } else {
        triangle.addEventListener('mouseover', function () {
            popup.classList.add('show');
        });
        triangle.addEventListener('mouseout', function () {
            popup.classList.remove('show');
        });

        triangle2.addEventListener('mouseover', function () {
            popup2.classList.add('show');
        });
        triangle2.addEventListener('mouseout', function () {
            popup2.classList.remove('show');
        });
    }
};
function wrappingReset(){
     if (triangle3 == null || popup3 == null){
         
     }
     else{
         triangle3.addEventListener('mouseover', function () {
            popup3.classList.add('show');
        });
        triangle3.addEventListener('mouseout', function () {
            popup3.classList.remove('show');
        });
     }
}

wrappingIndex();
wrappingReset();

submitButton.addEventListener('click', function (e) {
    e.preventDefault();
    var result = document.getElementById('email_error');
    if (validate()) {
        result.textContent = '';
        emailParagraph.style.color = '#7d7d7d';
        emailInputbox.style.border = '1px solid #7d7d7d';
        console.log('valid');
        location.reload();
    } else {
        result.textContent = 'Invalid email adress';
        emailInputbox.style.border = '1px solid red';
        emailParagraph.style.color = 'red';
        result.style.color = 'red';
        emailInputbox.focus();
        console.log('not valid');
    }

})
