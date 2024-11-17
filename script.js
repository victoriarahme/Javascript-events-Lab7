//mouse enter leave hover button

        var hoverDiv = document.getElementById('hoverDiv');
        hoverDiv.addEventListener('mouseenter', function() {
            this.style.backgroundColor = 'lightblue';
        });
        hoverDiv.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'transparent';
        });
//Keydown event

        document.addEventListener('keydown', function(event) {
            console.log(`Key pressed: ${event.key}`);
            if (event.key === 'Escape') {
                console.log('Escape key was pressed.');
            }
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