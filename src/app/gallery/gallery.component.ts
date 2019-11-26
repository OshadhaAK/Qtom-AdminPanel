import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../services/gallery.service';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.sass']
})
export class GalleryComponent implements OnInit {

  gallery: any;
  constructor(private galleryService: GalleryService) { }

  ngOnInit() {
    this.galleryService.getGallery().subscribe((data:any) =>{
      console.log("gallery",data);
      this.gallery=data; 
    },(error:any) => {
      console.log(error);
    });
    
  }

}
