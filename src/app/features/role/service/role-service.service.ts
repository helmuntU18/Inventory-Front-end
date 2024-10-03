import { Injectable } from '@angular/core';
import { HttpService } from '../../../core/services/http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleServiceService {
  private readonly endpoint = 'roles';
  constructor(private http: HttpService) { }

  getAllRoles(): Observable<any> {
    return this.http.get<any>(this.endpoint + '/findAll');
  }
  getRolesById(id: number): Observable<any> {
    return this.http.get<any>(`${this.endpoint}/${id}`);
  }


  createRoles(user: any): Observable<any> {
    return this.http.post<any>(`${this.endpoint}/create`, user);
  }


  updateRoles(id: number, user: any): Observable<any> {
    return this.http.put<any>(`${this.endpoint}/${id}`, user);
  }


  deleteRoles(id: number): Observable<any> {
    return this.http.delete<any>(`${this.endpoint}/${id}`);
  }
}
