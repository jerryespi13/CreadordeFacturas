
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

// tooltip o mensaje de sugerencia en cada elemento editable
const contentEditables = document.querySelectorAll('[contenteditable="true"]');
    const tooltip = document.getElementById('tooltip');
    contentEditables.forEach(element => {
        element.addEventListener('click', (event) => {
            // Obtener el texto del atributo data-original-title
            const title = element.getAttribute('data-original-title');
            if (title) {
                tooltip.textContent = title; // Mostrar el texto en el tooltip
                tooltip.style.display = 'block';
                tooltip.style.left = `${event.pageX + 10}px`; // Posición del tooltip
                tooltip.style.top = `${event.pageY + 10}px`;
            }
        });
    });

    document.addEventListener('click', (event) => {
        // Ocultar el tooltip si se hace clic fuera de los elementos editables
        if (![...contentEditables].some(el => el.contains(event.target))) {
            tooltip.style.display = 'none';
        }
    });