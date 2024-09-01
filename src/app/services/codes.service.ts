import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Env } from '../../env.config';

@Injectable({
  providedIn: 'root'
})
export class CodesService {

  private apiUrl = Env.baseURL+ '/codes'; 
  constructor(private http: HttpClient) {}

  getCodes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addCode(code: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, code);
  }}
