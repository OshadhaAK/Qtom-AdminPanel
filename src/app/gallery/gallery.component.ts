import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../services/gallery.service';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.sass']
})
export class GalleryComponent implements OnInit {

  gallery: any;
  name:any;
  constructor(private galleryService: GalleryService) { }

  ngOnInit() {
    this.galleryService.getGallery().subscribe((data:any) =>{
      //console.log("gallery",data);
      this.gallery=data; 
    },(error:any) => {
      console.log(error);
    });

    this.galleryService.getImg("5db331fc10d76f3d948eab4d").subscribe((data:any) => {
      this.name=data.name;
      //console.log("haha"+data)
    })
    
  }

}
