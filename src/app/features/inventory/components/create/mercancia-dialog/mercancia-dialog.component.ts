import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MercanciaModel } from '../../../models/MercanciaModel';

import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatNativeDateModule, MatOption } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';
import { userModel } from '../../../../users/models/usersModel';
import { UserServiceService } from '../../../../users/service/user-service.service';

@Component({
  selector: 'app-mercancia-dialog',
  standalone: true,
  imports: [MatFormField, MatLabel, MatInput, MatDatepickerModule, MatNativeDateModule, FormsModule,MatOption],
  templateUrl: './mercancia-dialog.component.html',
  styleUrls: ['./mercancia-dialog.component.css'],
})
export class MercanciaDialogComponent implements OnInit {
  mercancia: MercanciaModel = {
    id: 0,
    nombreProducto: '',
    cantidad: 0,
    fechaEntrada: new Date(),
    usuario: { id: 0, nombre: '' },
    usuarioModificacion: { id: 0, nombre: '' },
    fecha_modificacion: new Date(),
  };

  usuarios: userModel[] = [];

  constructor(
    public dialogRef: MatDialogRef<MercanciaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MercanciaModel,
    private usuarioService: UserServiceService
  ) {}

  ngOnInit(): void {
    if (this.data) {
      this.mercancia = { ...this.data };
    }

    this.usuarioService.getAllUsers().subscribe((usuarios) => {
      this.usuarios = usuarios;
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  save(): void {

    const selectedUsuario = this.usuarios.find(usuario => usuario.id === this.mercancia.usuarioModificacion.id);
    if (selectedUsuario) {
      this.mercancia.usuarioModificacion = selectedUsuario;
      this.mercancia.fecha_modificacion = new Date();
      this.dialogRef.close(this.mercancia);
    } else {
      console.error('No se ha seleccionado un usuario válido.');
    }
  }
}
