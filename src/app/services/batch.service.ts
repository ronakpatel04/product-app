import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Env } from '../../env.config';

@Injectable({
  providedIn: 'root'
})
export class BatchService {

  private apiUrl = Env.baseURL+'/batches';

  constructor(private http: HttpClient) {}

  getBatches(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addBatch(batch: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, batch);
  }

}
