import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerSearchService {

  protected basePath = 'https://www.balldontlie.io/api/v1/players';
  public defaultHeaders =  new HttpHeaders();

  constructor(protected httpClient: HttpClient) {
  }

  public getAllPlayers(page?: number, perPage?: number, searchQuery?: string): Observable<any>{
    let queryParameters = new HttpParams();
    if(page !== undefined && page !== null){
     queryParameters = queryParameters.set('page', page as any); 
    }
    if(perPage !== undefined && perPage !== null){
      queryParameters = queryParameters.set('per_page', perPage as any);
    }
    if(searchQuery !== undefined && searchQuery !== null){
      queryParameters = queryParameters.set('search', searchQuery as any);
    }


    const contentType = 'application/json';
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', contentType);

    return this.httpClient.get<any>(`${this.basePath}`, {params: queryParameters, headers});
  }

  public searchPlayer(perPage?: number, searchQuery?: string): Observable<any>{
    const contentType = 'application/json';
    let headers = this.defaultHeaders;
    headers = headers.set('Accept', contentType);

    return this.httpClient.get<any>(`${this.basePath}/${searchQuery}`, {headers});
  }
}
