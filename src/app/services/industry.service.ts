import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IIndustry } from '../modals/industry';
@Injectable({
  providedIn: 'root'
})
export class IndustryService {

  private url: string = "http://localhost:3000/industries";
  constructor( private http: HttpClient) { 

  }

  getIndustry():Observable<IIndustry[]>{
    return this.http.get<IIndustry[]>(`${this.url}`);
  }
}
