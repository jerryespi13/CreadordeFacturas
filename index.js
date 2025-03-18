
const $inputLogo = document.getElementById("logo")
const $logoView = document.getElementById("logoDelNegocio")
const $logoContainer = document.getElementById("logoContainer")
const $logoTexto = document.getElementById("logoTexto")

// damo click en el contenedor del logo para dispara el input
$logoContainer.addEventListener("click", function(){
    $inputLogo.click()
})

// Procesar el archivo seleccionado cuando cambie el input
$inputLogo.addEventListener("change", function () {
    const archivo = $inputLogo.files[0];
    if (archivo) {
        const lector = new FileReader();
        lector.onload = function (event) {
            $logoView.src = event.target.result;
            $logoView.style.display = "block"; // Asegúrate de mostrar la imagen si estaba oculta
            $logoTexto.style.display = "none"
            $logoContainer.style.border = "none"
        };
        lector.readAsDataURL(archivo);
    }
});