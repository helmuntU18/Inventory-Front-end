import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MercanciaService } from '../../services/mercancia.service';
import { FilterComponent } from '../../../filter/filter.component';
import { MercanciaDialogComponent } from '../create/mercancia-dialog/mercancia-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatFormFieldModule,
    FilterComponent,
    MercanciaDialogComponent,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './mercancia.component.html',
  styleUrl: './mercancia.component.css',
})
export class MercanciaComponent {
  mercancias = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private mercanciaService: MercanciaService, private dialog: MatDialog) {}


  ngOnInit(): void {
    this.loadInventories();
    this.mercancias.filterPredicate = (data: any, filter: string) => {
      const lowerCaseFilter = filter.toLowerCase();
      return (
        data.nombreProducto.toLowerCase().includes(lowerCaseFilter) ||
        data.usuario?.nombre.toLowerCase().includes(lowerCaseFilter) ||
        data.usuarioModificacion?.nombre.toLowerCase().includes(lowerCaseFilter) ||
        data.fecha_modificacion.toString().includes(lowerCaseFilter) ||
        data.id.toString().includes(lowerCaseFilter)
      );
    };
  }
  ngAfterViewInit(): void {
    this.mercancias.paginator = this.paginator;

  }

  loadInventories(): void {
    this.mercanciaService.getAllInventories().subscribe((data) => {
      this.mercancias.data = data;
      this.mercancias.paginator = this.paginator;
    });
  }
  openCreateDialog(): void {
    const dialogRef = this.dialog.open(MercanciaDialogComponent, {
      width: '900px'
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.mercanciaService.createMercancia(result).subscribe(() => {
          this.loadInventories();
        });
      }
    });
  }

  onFilterSearchChange(filterValue: string): void {
    this.mercancias.filter = filterValue.trim().toLowerCase();
  }

}
