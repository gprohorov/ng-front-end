import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/api/v1/items';


@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(baseUrl);
  }

  create(data): Observable<any> {
    return this.http.post(baseUrl, data);
  }


 // delete = id => this.http.delete(`${baseUrl}/${id}`);
  delete(id): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }


}
