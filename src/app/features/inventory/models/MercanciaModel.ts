export interface MercanciaModel
{
  id: number;
  nombreProducto: string;
  cantidad: number;
  fechaEntrada: Date;
  usuario: {
    id: number;
    nombre: string;
  };
  usuarioModificacion: {
    id: number;
    nombre: string;
  };
  fecha_modificacion: Date;
}
