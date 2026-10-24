# Wordlings · Pokémon English (v0.7)

PWA para practicar vocabulario inglés con perfiles separados (Leo y Paula), monedas, huevos temáticos, colección Pokémon y pruebas de evolución.

## Novedades de esta versión
- Incluye las seis primeras generaciones (721 Pokémon) y los 18 tipos, incluido Hada.
- Incluye los huevos personalizados de Normal, Fuego, Agua, Eléctrico, Planta, Hielo, Lucha, Veneno, Tierra, Volador, Psíquico, Bicho, Roca, Fantasma, Dragón, Acero, Siniestro y Hada.
- La tienda muestra los huevos aunque los datos Pokémon todavía se estén cargando.
- La colección dibuja las 721 tarjetas y siluetas desde el inicio; los nombres y datos se completan al cargar los datos.
- La descarga de imágenes comprueba que los archivos sean imágenes reales para evitar guardar páginas HTML como si fueran sprites.
- Caché de service worker nueva v7 y separada para imágenes Pokémon; no sustituye imágenes que fallen por la página principal.
- Solo Pokémon de etapa primaria pueden salir de los huevos.
- Para evolucionar: 5 palabras seguidas para la segunda etapa, 10 para la tercera y 15 para una cuarta etapa. Un fallo reinicia la racha. Las pruebas no dan monedas.
- La pista muestra primero la palabra y, al volver a pulsarla, pronuncia directamente esa palabra.
- Preferencia de voz Google US English cuando el navegador la ofrece; en caso contrario, voz inglesa disponible.
- Al pulsar un Pokémon descubierto en «Colección», se abre su ficha ampliada con tipos y descripción en castellano.

## Instalar en iPhone/iPad
1. Publica **todo el contenido de esta carpeta** en un hosting HTTPS (por ejemplo, GitHub Pages o Netlify), sustituyendo la versión anterior.
2. Abre la URL publicada en Safari en el iPhone/iPad y recarga.
3. Cierra completamente Wordlings y vuelve a abrirlo para que active el service worker nuevo.
4. Entra en la tienda y pulsa **«Descargar datos e imágenes para usar sin conexión»**. Mantén la app abierta y conectada hasta que finalice.
5. Pulsa **Compartir → Añadir a pantalla de inicio → Añadir** si todavía no la has instalado.

No se puede instalar como PWA directamente abriendo el ZIP o un archivo local: necesita una URL HTTPS. La disponibilidad del reconocimiento de voz depende de la versión de iOS/Safari; si el navegador no implementa `SpeechRecognition`, el reconocimiento por voz no funcionará aunque la app esté instalada.

## Datos y conexión
- La primera descarga de los datos necesita conexión a PokéAPI y puede tardar porque reúne nombres, tipos, cadenas de evolución y descripciones en castellano.
- La descarga de imágenes guarda hasta 721 ilustraciones. Si el navegador indica que algunas no se han podido descargar, esas imágenes no estarán disponibles sin conexión.
- Los datos se guardan en el almacenamiento local del navegador y las imágenes en Cache Storage. No se sincronizan entre dispositivos.
- Si una descarga antigua dejó imágenes incorrectas en caché, la versión 0.6 usa nombres de caché nuevos para sustituirlas.
- Puedes activar o desactivar generaciones en Colección; la selección afecta a los Pokémon que pueden salir de los huevos.
- Los botones de navegación y el guardado del progreso están protegidos ante errores de almacenamiento. Las imágenes fallidas usan un sprite alternativo y, si ambos fallan, un marcador visible en lugar de desaparecer.
- Los Pokémon y sus imágenes son propiedad de sus respectivos titulares. Este proyecto es un prototipo educativo/personal y no implica afiliación oficial con Nintendo o The Pokémon Company.


## Versión 0.8
- Comprar un huevo lo abre inmediatamente y añade el Pokémon al criadero.
- Corregido el helper de renderizado de imágenes que impedía completar el render de las pantallas.
- Precios: 70 monedas para todos salvo Dragón, Siniestro, Hada, Psíquico, Acero y Fantasma (100); estos aparecen al final de la tienda.
- Las imágenes de Pokémon prueban varias fuentes alternativas.
- El menú inferior ya no incluye una pestaña independiente de incubadora.


## Cambios v0.9
- El progreso (monedas, palabras, colección y criadero) permanece en `localStorage` por perfil; actualizar archivos en el mismo origen no lo borra.
- Reconocimiento de voz con resultados intermedios y tolerancia moderada a diferencias de transcripción.
- Bonus de 20 monedas extra cada cinco aciertos seguidos en práctica normal.
- Huevos priorizan Pokémon aún no descubiertos; se evitan cartas duplicadas en el criadero y se permite tener Eevee y sus evoluciones como especies separadas.
- Ficha de Pokémon accesible al tocar una tarjeta del criadero.
- Botón para salir de una prueba evolutiva.


## Cambios v0.10
- Selector de tolerancia del reconocimiento de voz: Estricto, Normal, Fácil y Muy fácil.
- Copia de seguridad JSON exportable e importable desde Ajustes y copia de seguridad; incluye perfiles, monedas, palabras, colección, criadero, preferencias y datos Pokémon guardados en localStorage.
- Vocabulario compartido entre Leo y Paula. Las palabras existentes se sincronizan entre ambos perfiles; las que solo existían en uno se incorporan desactivadas en el otro.
- Cada perfil puede activar o desactivar palabras independientemente. Borrar una palabra la elimina de ambos perfiles.
- Caché de la aplicación actualizada a v10 para que se descargue la nueva interfaz.
