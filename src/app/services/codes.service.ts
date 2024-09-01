import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CodesService {

  private apiUrl = 'http://localhost:3000/api/codes'; 
  constructor(private http: HttpClient) {}

  getCodes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addCode(code: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, code);
  }}
