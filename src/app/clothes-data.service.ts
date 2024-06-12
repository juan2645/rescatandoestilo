import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Clothes } from './clothes-list/clothes';
import { catchError, map } from 'rxjs/operators';

const url = 'https://api.jsonbin.io/v3/b/6669dbaead19ca34f8781e31';

interface ApiResponse {
  record: Clothes[];
}

@Injectable({
  providedIn: 'root'
})
export class ClothesDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Clothes[]> {
    return this.http.get<ApiResponse>(url).pipe(
      map((response: ApiResponse) => response.record),
      catchError((error) => {
        console.error('Error fetching data', error);
        return throwError('Failed to fetch clothes data');
      })
    );
  }
}
