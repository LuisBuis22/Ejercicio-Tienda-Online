class Producto {
  nombre: string;
  precio: number;
  stock: number;

  constructor(nombre: string, precio: number, stock: number) {
      this.nombre = nombre;
      this.precio = precio;
      this.stock = stock;
  }
}

const ventas:number[] = [];
const caja:number[] = [];

class TiendaOnline {
  //propiedades
  nombre: string;
  productos: Producto[];

  constructor(nombre: string,) {
      this.nombre = nombre;    
      this.productos = [];
  };

  //métodos
  agregarProducto(nombre: string, precio:number, stock: number) {
      this.productos.push(new Producto(nombre, precio, stock))
  };

  mostrarProductos(): void {
      console.log(this.productos);
  };

  buscarProducto(nombreProducto:string) {
      return this.productos.findIndex((e) => e.nombre === nombreProducto);
  };

  realizarCompra(nombreProducto: string, cantidad: number): void{
      let index: number = this.buscarProducto(nombreProducto);
      this.productos[index].stock -= cantidad;
      let dinero = this.productos[index].precio; 
      ventas.push(cantidad);
      
      while(cantidad != 0) {
           caja.push(dinero);
           cantidad--;
      };
  };

  calcularTotalVentas() {
      const totalStockVendido = ventas.reduce((a, b) => a + b, 0);
      console.log(totalStockVendido);
      const totalDinero = caja.reduce((a, b) => a + b, 0);
      console.log(totalDinero);
  };
  }

  const zara = new TiendaOnline("Zara");
  zara.agregarProducto("Camisa", 24, 9);
  zara.agregarProducto("Pantalón", 30, 7);
  zara.agregarProducto("Reloj", 120, 2);

  console.log(zara);

  zara.mostrarProductos();

  zara.buscarProducto("Camisa");
  zara.realizarCompra("Pantalón", 2);
  zara.realizarCompra("Camisa", 4)
  zara.mostrarProductos()

  console.log(ventas);
  console.log(caja)

  zara.calcularTotalVentas();