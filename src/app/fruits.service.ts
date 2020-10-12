import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from 'process';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FruitsService {

  constructor(private httpClient: HttpClient) { }

  getFruits(): Observable<string[]> {
    return this.httpClient.get<string[]>(`${environment.api}/fruits`);
  }
}
