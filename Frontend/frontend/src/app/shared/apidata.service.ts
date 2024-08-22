import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from "@angular/common/http";
import { Observable } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ApidataService {
  apiUrl = 'http://localhost:3001/api';
  constructor(private http: HttpClient) {}

  getSymbols(): Observable<any>{
    const auxUrl = `${this.apiUrl}/symbols`;
    return this.http.get(auxUrl);
  }
  getHistorical(): Observable<any>{
    const auxUrl = `${this.apiUrl}/historical`;
    return this.http.get(auxUrl);
  }
  getHistoricalNemo(res: string): Observable<any>{
    const auxUrl = `${this.apiUrl}/historical/${res}`;
    return this.http.get(auxUrl);
  }
}
