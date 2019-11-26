import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IndustryService } from '../services/industry.service';
@Component({
  selector: 'app-industries',
  templateUrl: './industries.component.html',
  styleUrls: ['./industries.component.sass']
})
export class IndustriesComponent implements OnInit {
  industries:any;
  showForm:any;
  productsandservices:any;
  Name:any;
  Description:any;
  ID:any;
  success:any;
  delete:any;
  image:any;
  newName:any;
  newDescription:any;
  newImage:any;
  
  constructor(private industryService: IndustryService) {
    
    this.showForm = false;
    this.success = false;
    this.delete = false;
    // this.industries = [
    //   {ID: "01", Name : "Industry 01",Description : "a"},
    //   {ID: "02", Name : "Industry 02",Description : "b"},
    //   {ID: "03", Name : "Industry 03",Description : "c"},
    //   {ID: "04", Name : "Industry 04",Description : "d"},
    //   {ID: "05", Name : "Industry 05",Description : "e"}
    // ]
   }

  ngOnInit() {
    this.industryService.getIndustries().subscribe((data:any) =>{
      //console.log("ind",data);
      this.industries=data; 
    },(error:any) => {
      console.log(error);
    });

  }

  update(id:any){
    this.ID = this.industries[id]._id;
    this.Name = this.industries[id].name;
    this.Description = this.industries[id].description;  
    //alert(this.ID+":"+this.Name+":"+this.Description)  
  }

  remove(id:any){
    //console.log(this.industries)
    this.ID = this.industries[id]._id;
    //console.log(this.ID)
  }

  // save(id:any){
  //   this.success = true;

  // }
  // deleteItem(id:any){
  //   this.delete = true;
  // }
  // addNew(){
  //   alert("Done");
  // }

}
