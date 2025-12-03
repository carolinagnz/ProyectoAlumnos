// src/components/Avatar.jsx

/*
 * COMPONENTE: Avatar
 * PROPÓSITO: Mostrar la imagen circular del alumno
 * PROPS: urlImagen (string) - URL de la imagen
 */

function Avatar({ urlImagen }) {
  
  return (
    <img 
      // URL de la imagen que viene del JSON
      src={urlImagen}
      
      // Texto alternativo para accesibilidad
      alt="Avatar del alumno"
      
      /*
       * CLASES TAILWIND:
       * w-24 h-24: Tamaño 96x96px (cuadrado)
       * rounded-full: Hace la imagen circular
       * object-cover: Recorta sin deformar
       * shadow-md: Sombra mediana
       * border-2 border-white: Borde blanco de 2px
       */
      className="w-24 h-24 rounded-full object-cover shadow-md border-2 border-white"
    />
  );
}

// Exportar para usar en otros archivos
export default Avatar;