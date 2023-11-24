#Ejercicio: Crear una Clase de Tienda Online
---
Crea una clase llamada TiendaOnline que represente una tienda en línea. La tienda debe tener las siguientes propiedades:

- nombre: Una cadena que representa el nombre de la tienda.
- productos: Un arreglo de objetos que representan los productos en venta. Cada objeto de producto debe tener propiedades como nombre, precio, y stock.

La clase TiendaOnline debe tener los siguientes métodos:

- agregarProducto(producto: Producto): Un método que toma un objeto de producto y lo agrega al arreglo de productos en venta.

- mostrarProductos(): void: Un método que imprime en la consola la lista de productos disponibles, mostrando detalles como el nombre, el precio y el stock.

- realizarCompra(nombreProducto: string, cantidad: number): void: Un método que toma el nombre de un producto y la cantidad deseada, y simula una compra restando la cantidad comprada del stock del producto. Imprime en la consola un mensaje indicando si la compra fue exitosa o no.

- calcularTotalVentas(): number: Un método que calcula y devuelve el total de ventas de la tienda basado en los productos vendidos.

Crea una instancia de la clase TiendaOnline, agrega algunos productos, muestra la lista de productos, realiza algunas compras simuladas y muestra el total de ventas.

Este ejercicio permite practicar la creación de clases, la manipulación de propiedades y métodos, y la interacción entre objetos en TypeScript.