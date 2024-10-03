import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../../../core/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class MercanciaService {
  private readonly endpoint = 'mercancia';

  constructor(private http: HttpService) { }

  getAllInventories(): Observable<any> {
    return this.http.get<any>(this.endpoint + '/findAll');
  }


  getMercanciaById(id: number): Observable<any> {
    return this.http.get<any>(`${this.endpoint}/${id}`);
  }


  createMercancia(mercancia: any): Observable<any> {
    return this.http.post<any>(`${this.endpoint}/create`, mercancia);
  }


  updateInventory(id: number, mercancia: any): Observable<any> {
    return this.http.put<any>(`${this.endpoint}/${id}`, mercancia);
  }


  deleteInventory(id: number): Observable<any> {
    return this.http.delete<any>(`${this.endpoint}/${id}`);
  }
}
