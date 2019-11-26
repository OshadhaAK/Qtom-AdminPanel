import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IGallery } from '../modals/gallery';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  private url: string = "http://localhost:3000/gallery/";
  constructor(private http: HttpClient) {
    
   }

   getGallery():Observable<IGallery[]>{
     return this.http.get<IGallery[]>(`${this.url}`);
   }

   getImg(id){
    return this.http.get(`${this.url}`+ id);
   }
}
