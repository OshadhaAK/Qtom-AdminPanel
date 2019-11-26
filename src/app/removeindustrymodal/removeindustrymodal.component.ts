import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-removeindustrymodal',
  templateUrl: './removeindustrymodal.component.html',
  styleUrls: ['./removeindustrymodal.component.sass']
})
export class RemoveindustrymodalComponent implements OnInit {
  @Input() public ID;
  constructor() {
    console.log(this.ID)
   }

  ngOnInit() {
  }

  deleteItem(id:any){
    alert("deleted : "+this.ID);
  }
}
