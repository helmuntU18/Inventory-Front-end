import { RoleModel } from "../../role/models/RoleModel";

export interface userModel {
  id: number;
  nombre: string;
  edad: number;
  id_rol: RoleModel;
  fechaIngreso: Date;
}
