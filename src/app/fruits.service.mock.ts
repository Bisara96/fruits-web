import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockFruitsService {

  constructor() { }

  getFruits(): Observable<string[]> {
    return of([]);
  }
}
