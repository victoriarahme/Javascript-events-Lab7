//mouse enter leave hover button

        var hoverDiv = document.getElementById('hoverDiv');
        hoverDiv.addEventListener('mouseenter', function() {
            this.style.backgroundColor = 'lightblue';
            console.log('Mouse has hovered the button ');
        });
        hoverDiv.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'transparent';
            console.log('Mouse has stopped hovering the button');
        });
//Keydown event

        document.addEventListener('keydown', function(event) {
            console.log(`Key pressed: ${event.key}`);
            if (event.key === 'Escape') {
                console.log('Escape key was pressed.');
            }
        });
        document.getElementById('pressKey').addEventListener('keydown', function(event) {
            console.log(`Key pressed in input: ${event.key}`);
        });

//Form event

        document.addEventListener('DOMContentLoaded', function() {
             const form = document.getElementById('myForm');
             const fullName= document.getElementById('fullName');
             const enrollmentStatus= document.getElementById('enrollmentStatus'); 
            
             form.addEventListener('submit', function(event){
                console.log('Form submitted');
                event.preventDefault();
                alert(`Full name: ${fullName.value}, Enrollment status: ${enrollmentStatus.value}`);
             });
            
             enrollmentStatus.addEventListener('change', function(){
                console.log('Selection changed to:', this.value);
             });

             fullName.addEventListener('input', function() {
                console.log('Input changed: ', this.value);
             });
            });
//focus, blur event

            function handleFocus(event) {
                console.log(event);
                console.log(event.target);
                console.log(event.target.value);
                event.target.style.background = 'lightblue';
            }

    function validateWeight() {
        var weight = document.getElementById('weightInput');
        var weightValue =parseInt(weight.value, 10);
//I put 90 as minimum adult weight (if a 4'11 woman for example), other wise anything below considered a child
        if (weightValue >= 90) {
            weight.style.backgroundColor = 'lightgreen';
            console.log('Eligible adult weight confirmed.');
         }
            else {
                weight.style.backgroundColor = 'Salmon';
                console.log('Check weight, may be under adult eligibility.');
            }
        }
    