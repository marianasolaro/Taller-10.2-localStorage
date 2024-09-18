document.addEventListener('DOMContentLoaded', function() {
    let datoGuardado = localStorage.getItem('datoGuardado');
    document.getElementById('data').textContent = datoGuardado;
})