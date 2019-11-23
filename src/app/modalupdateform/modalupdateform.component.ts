import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modalupdateform',
  templateUrl: './modalupdateform.component.html',
  styleUrls: ['./modalupdateform.component.sass']
})
export class ModalupdateformComponent implements OnInit {
  @Input() public Name;
  @Input() public ID;
  @Input() public Description;
  success: any;
  constructor() { }

  ngOnInit() {
  }
  save(id:any){
    this.success = true;

  }
}
