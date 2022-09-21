import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url = 'http://jsonplaceholder.typicode.com/posts';
  constructor(private httpClient: HttpClient) { }

    getListApi(){
      return this.httpClient.get(this.url);
    }
  
}
