const actualDate = new Date().toISOString().split('T')[0];; // Fecha y hora actual

const $inputDate = document.querySelectorAll('input[type="date"]')

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
        element.addEventListener('mouseover', (event) => {
            // Obtener el texto del atributo data-original-title
            const title = element.getAttribute('data-original-title');
            if (title) {
                tooltip.textContent = title; // Mostrar el texto en el tooltip
                tooltip.style.display = 'block';

                const rect = element.getBoundingClientRect(); // Obtener posición y dimensiones del elemento
                const tooltipHeight = tooltip.offsetHeight;
                const tooltipWidth = tooltip.offsetWidth;

                // Calcular posición para centrar el tooltip arriba del elemento
                const top = rect.top - tooltipHeight - 5; // 5px de margen opcional
                const left = rect.left + (rect.width / 2) - (tooltipWidth / 2);

                tooltip.style.left = `${left}px`;
                tooltip.style.top = `${top}px`;
            }
        });
        element.addEventListener('mouseout', () => {
            tooltip.style.display = 'none'; // Ocultar el tooltip cuando el mouse salga del elemento
        });
    });

// asignar fecha actual a inputs de fechas
$inputDate.forEach(input => {
    input.value = actualDate
});
