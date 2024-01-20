import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, throwError } from 'rxjs';
import { Bank } from '../models/Bank.model';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class BankService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getBanks(): Observable<Bank[]> {
    return this.http.get<Bank[]>(this.apiUrl);
  }

  searchByBankCode(bankCode: string): Observable<Bank> {
    const searchUrl = `${this.apiUrl}/${bankCode}`;
    return this.http.get<Bank>(searchUrl).pipe(
      catchError(() => {
        const error = new Error('Erro na solicitação de busca de banco por código.');
        return throwError(() => error);
      })
    );
  }

}
