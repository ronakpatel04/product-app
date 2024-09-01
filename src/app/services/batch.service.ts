import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BatchService {

  private apiUrl = 'http://localhost:3000/api/batches';

  constructor(private http: HttpClient) {}

  getBatches(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addBatch(batch: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, batch);
  }

}
