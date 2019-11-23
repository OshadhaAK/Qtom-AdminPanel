import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-updateindustrymodal',
  templateUrl: './updateindustrymodal.component.html',
  styleUrls: ['./updateindustrymodal.component.sass']
})
export class UpdateindustrymodalComponent implements OnInit {
  @Input() public Name;
  @Input() public ID;
  @Input() public Description;
  constructor() { }

  ngOnInit() {
  }

}
