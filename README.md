# Rescatandoestilo - Tienda de Ropa

Este proyecto Angular simula una tienda de ropa en línea donde los usuarios pueden navegar a través de una lista de ropa, agregar artículos a su carrito y realizar una compra.

# Información del estudiante:

Nombre: Juan Carlos Vena
DNI : 24151085
e-mail : juan2645@gmail.com
Sede: Olavarría
Enlace al proyecto StackBlitz:  https://stackblitz.com/edit/stackblitz-starters-um4hs3?file=angular.json

# Estructura del proyecto

# Componentes :

# ClothesListComponent 
Muestra una lista de prendas obtenidas de una API. Los usuarios pueden ver detalles, agregar artículos a su carrito y filtrar por tipo usando la barra lateral.
# ClothesSidebarComponent 
Nos da opciones de filtrado por tipo (por ejemplo, t-shirt, pants, jacket) para ClothesListComponent.
# ClothesCartComponent 
Muestra los artículos actualmente en el carrito de compras. Los usuarios pueden ajustar cantidades, ver precios totales, etc.
# ClothesContactComponent 
Proporciona información de contacto y un formulario para que los usuarios envíen consultas o mensajes a la tienda.
# InputIntegerComponent 
Permite a los usuarios ingresar cantidades de artículos en el carrito, con validación con respecto al stock disponible.
# ClothesClothsComponent 
Actúa como contenedor de los componentes anteriores, facilitando la interacción y comunicación entre ellos.

# Servicios :

# ClothesDataService
Recupera datos de ropa de una API JSON ( https://api.jsonbin.io/v3/b/6669dbaead19ca34f8781e31).
# ClothesCartService
Gestiona la funcionalidad del carrito de compras, la adición de artículos, el cálculo de totales y el almacenamiento del estado. 

# Funcionalidad :

# Lista de ropa
Muestra una tabla de ropa con detalles con imagen, nombre, descripción, precio, stock y un botón para agregar artículos al carrito.
# Filtrado 
Los usuarios pueden filtrar la ropa por tipo (por ejemplo, t-shirt, pants) utilizando la barra lateral.
# Carrito de Compras 
Muestra los artículos agregados al carrito con cantidades y precios totales. Los usuarios pueden ajustar cantidades o eliminar artículos. El monto total de la compra se actualiza dinámicamente.
# Proceso de compra 
Los usuarios pueden iniciar una compra haciendo clic en el botón "Comprar", que marca la compra como completa y actualiza la interfaz de usuario para mostrar un mensaje de confirmación.
# Formulario de contacto 
Permite a los usuarios enviar mensajes o consultas a la tienda a través de un sencillo formulario.
# Ruteo
La aplicación incluye al menos dos secciones con sus propias rutas: Inicio (Lista de Ropa) y Contacto.

# Rutas :

# Inicio: 
/cloths - Muestra la lista principal de ropa y el carrito de compras.
# Contacto: 
/contact - Muestra el formulario de contacto y los detalles de contacto de la tienda.