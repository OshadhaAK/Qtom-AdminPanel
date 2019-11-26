import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-productsandservices',
  templateUrl: './productsandservices.component.html',
  styleUrls: ['./productsandservices.component.sass']
})
export class ProductsandservicesComponent implements OnInit {
  productsOrServices:any;
  showAll:any;
  showForm:any;
  productsandservices:any;
  Name:any;
  Description:any;
  ID:any;
  image:any;
  newName:any;
  newDescription:any;
  newImage:any;
  constructor(private router: Router) { 
    this.showAll = true;
    this.showForm = false;
    
    
  
    this.productsOrServices = [
      {ID: "01", Name : "Product 01",Description : "a"},
      {ID: "02", Name : "Product 02",Description : "b"},
      {ID: "03", Name : "Product 03",Description : "c"},
      {ID: "04", Name : "Product 04",Description : "d"},
      {ID: "05", Name : "Product 05",Description : "e"}
    ]
  }

  ngOnInit() {
  }
  update(id:any){
    this.ID = this.productsOrServices[id].ID;
    this.Name = this.productsOrServices[id].Name;
    this.Description = this.productsOrServices[id].Description;    
  }

  remove(id:any){
    this.ID = this.productsOrServices[id].ID;
    
  }

 
}
