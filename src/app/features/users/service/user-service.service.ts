import { Injectable } from '@angular/core';
import { HttpService } from '../../../core/services/http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private readonly endpoint = 'users';
  constructor(private http: HttpService) { }

  getAllUsers(): Observable<any> {
    return this.http.get<any>(this.endpoint + '/findAll');
  }
  getUsersById(id: number): Observable<any> {
    return this.http.get<any>(`${this.endpoint}/${id}`);
  }


  createUsers(user: any): Observable<any> {
    return this.http.post<any>(`${this.endpoint}/create`, user);
  }


  updateUsers(id: number, user: any): Observable<any> {
    return this.http.put<any>(`${this.endpoint}/${id}`, user);
  }


  deleteUsers(id: number): Observable<any> {
    return this.http.delete<any>(`${this.endpoint}/${id}`);
  }
}
