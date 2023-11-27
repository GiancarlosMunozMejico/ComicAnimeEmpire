function openNav(){
    document.getElementById("mobile-menu").style.width = "100%";
}

function closeNav(){
    document.getElementById("mobile-menu").style.width = "0%";
}

// Función para manejar la selección de la imagen
function selectImage(imageNumber) {
    // Realiza alguna acción con la imagen seleccionada
    console.log('Imagen seleccionada:', imageNumber);
    // Puedes agregar más lógica aquí, como mostrar información relacionada con la imagen o abrir un enlace específico.
  }
  
  // Obtener todos los botones de imagen
  var overlayButtons = document.querySelectorAll('.overlay-button');
  
  // Agregar el evento onclick a cada botón de imagen
  overlayButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      var imageNumber = this.dataset.imageNumber;
      selectImage(imageNumber);
    });
  });