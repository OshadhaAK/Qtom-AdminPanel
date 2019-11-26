import { Component, OnInit, Input } from '@angular/core';
import { IndustryService } from '../services/industry.service';

@Component({
  selector: 'app-updateindustrymodal',
  templateUrl: './updateindustrymodal.component.html',
  styleUrls: ['./updateindustrymodal.component.sass']
})
export class UpdateindustrymodalComponent implements OnInit {
  
  @Input() public ID;
  @Input() public Name;
  @Input() public Description;

  name: any;
  description: any;
  constructor(private industryService: IndustryService) { 
    
  }

  ngOnInit() {
    this.name = this.Name;
    this.description = this.Description;
  }

  save(id:any){
    this.industryService.updateIndustry(this.ID,this.name,this.description).subscribe((data:any)=>{
        //console.log("sent "+data)
    });
    //console.log("sent")
  }

  
}
