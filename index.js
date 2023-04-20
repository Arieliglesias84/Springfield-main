let form = document.getElementById("form")
let submit = document.getElementById("submit")
let nombre = document.getElementById("nombre")
let apellido = document.getElementById("apellido")
let email = document.getElementById("email")

submit.addEventListener('click', ()=>{
    if (nombre.value && apellido.value && email.value){
        var doc = new jsPDF();
        doc.setFontSize(20);
        doc.text('Tus datos', 10, 10);
        doc.line(10, 20, 150, 20);
        doc.setFontSize(18);
        doc.text('Nombre: ' + nombre.value, 10, 30);
        doc.setFontSize(18);
        doc.text('Apellido: ' + apellido.value, 10, 40);
        doc.setFontSize(18);
        doc.text('Email de contacto: '+ email.value, 10, 50);
        doc.line(10, 60, 150, 60);
        doc.setFontSize(20);
        doc.text('Gracias por tu interes en Springfield.', 10, 70);
        doc.save('a4.pdf');
    } else {
        alert('Por favor completa todos los datos.')
        
    }
    
    
})

    /*doc.setFontSize(22);
    doc.text('Tus datos', 20, 10);
;*/

