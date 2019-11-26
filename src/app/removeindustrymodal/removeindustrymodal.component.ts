import { Component, OnInit, Input } from '@angular/core';
import { IndustryService } from '../services/industry.service';

@Component({
  selector: 'app-removeindustrymodal',
  templateUrl: './removeindustrymodal.component.html',
  styleUrls: ['./removeindustrymodal.component.sass']
})
export class RemoveindustrymodalComponent implements OnInit {
  @Input() public ID;
  industries:any;
  constructor(private industryService: IndustryService) {
    // console.log(this.ID)
   }

  ngOnInit() {
  }

  deleteItem(id:any){
    alert("deleted : "+this.ID);
    this.industryService.deleteIndustry(this.ID).subscribe((data:any)=>{
      //console.log("deleted")
    });
  }
  reload(){
    this.industryService.getIndustries().subscribe((data:any) =>{
      //console.log("ind",data);
      this.industries=data; 
    },(error:any) => {
      console.log(error);
    });
  }
}
