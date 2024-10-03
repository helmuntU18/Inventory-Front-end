import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MercanciaComponent } from './features/inventory/components/mercancia/mercancia.component';
import { LayoutComponent } from './features/layout/layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MercanciaComponent,LayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-app';
}
