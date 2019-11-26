import { Component, OnInit } from '@angular/core';
import { IndustryService } from '../services/industry.service';

@Component({
  selector: 'app-newindustrymodal',
  templateUrl: './newindustrymodal.component.html',
  styleUrls: ['./newindustrymodal.component.sass']
})
export class NewindustrymodalComponent implements OnInit {

  name:any;
  description:any;
  image:any
  constructor(private industryService: IndustryService) { }

  ngOnInit() {
  }

  save(){
    //console.log("save",this.name,this.description)
    this.industryService.addIndustry(this.name,this.description).subscribe((data)=>{
        //console.log("post",data)
    });
  }
}
