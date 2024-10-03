import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RoleServiceService } from '../../../../role/service/role-service.service';
import { UserServiceService } from '../../../service/user-service.service';
import { MatOption } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CommonModule } from '@angular/common';
import { RoleModel } from '../../../../role/models/RoleModel';

@Component({
  selector: 'app-user-dialog',
  standalone: true,
  imports: [ReactiveFormsModule,MatFormFieldModule,MatOption, MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,MatDatepickerModule,CommonModule,FormsModule],
  templateUrl: './user-dialog.component.html',
  styleUrl: './user-dialog.component.css'
})
export class UserDialogComponent {
  user = { nombre: '', edad: '', rol: '', fechaIngreso: '' }; // Define los campos necesarios
  roles: RoleModel[] = [];// Lista de roles disponibles

  constructor(
    public dialogRef: MatDialogRef<UserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private roleService: RoleServiceService
  ) {
    if (data) {
      this.user = data; // Si se proporciona un usuario, se carga en el formulario
    }
  }

  ngOnInit(): void {
    this.loadRoles(); // Carga los roles al inicializar
  }

  loadRoles(): void {
    this.roleService.getAllRoles().subscribe((data) => {


      this.roles = data; // Asigna los roles obtenidos a la variable
    });
  }

  onSave(): void {
    console.log(this,this.user);

    this.user.fechaIngreso = new Date(this.user.fechaIngreso).toISOString();
    this.dialogRef.close(this.user); // Devuelve los datos del usuario al componente padre
  }

  onCancel(): void {
    this.dialogRef.close(); // Cierra el diálogo sin devolver datos
  }
}
