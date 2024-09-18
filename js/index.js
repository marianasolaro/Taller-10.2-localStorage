document.getElementById('buttonText').addEventListener('click', function() {
    let inputText = document.getElementById('inputText').value;
    localStorage.setItem('datoGuardado', inputText);
    document.getElementById('inputText').value = '';
    
    alert('Dato guardado con éxito')
})