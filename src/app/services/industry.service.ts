import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IIndustry } from '../modals/industry';
@Injectable({
  providedIn: 'root'
})
export class IndustryService {

  private url: string = "http://localhost:3000/industries/";
  constructor( private http: HttpClient) { 

  }

  getIndustries():Observable<IIndustry[]>{
    return this.http.get<IIndustry[]>(`${this.url}`);
  }

  updateIndustry(id,name,description){
    let params = {
      name:name,
      description:description,
      image:"img"
    }
    //console.log("params"+params.name+" : "+id);
    return this.http.patch(`${this.url}`+ id,params);
  }

  getIndustry(id){
    return this.http.get(`${this.url}`+ id);
  }

  deleteIndustry(id){
    return this.http.delete(`${this.url}`+ id);
  }

  addIndustry(name,description){
    let params = {
      name:name,
      description:description,
      image:"img"
    }
    //console.log(params,"params")
    return this.http.post(`${this.url}`,params);
  }
}
