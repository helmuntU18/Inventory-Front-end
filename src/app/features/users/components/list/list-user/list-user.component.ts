import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../../service/user-service.service';
import { MatDialog } from '@angular/material/dialog';
import { DataSource } from '@angular/cdk/collections';
import { UserDialogComponent } from '../../create/user-dialog/user-dialog.component';
import { MatTableModule } from '@angular/material/table';
import { MatIcon } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { userModel } from '../../../models/usersModel';

@Component({
  selector: 'app-list-user',
  standalone: true,
  imports: [MatTableModule,MatIcon,CommonModule],
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.css'
})
export class ListUserComponent implements OnInit{
  users: userModel[] = [];
  displayedColumns: string[] = ['nombre', 'edad', 'rol', 'fechaIngreso', 'acciones'];

  constructor(private userService: UserServiceService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getAllUsers().subscribe((data) => {
      this.users = data;
    },
    (error) => {
      console.error('Error al cargar los usuarios:', error);
      this.users = []; 
    });
  }

  openCreateDialog(): void {
    const dialogRef = this.dialog.open(UserDialogComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.userService.createUsers(result).subscribe(() => {
          this.loadUsers();
        });
      }
    });
  }


  openEditDialog(user: any): void {
    const dialogRef = this.dialog.open(UserDialogComponent, {
      width: '400px',
      data: user,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.userService.updateUsers(user.id, result).subscribe(() => {
          this.loadUsers();
        });
      }
    });
  }

  deleteUser(id: number): void {
    if (confirm('¿Está seguro de que desea eliminar este usuario?')) {
      this.userService.deleteUsers(id).subscribe(() => {
        this.loadUsers();
      });
    }
  }
}
