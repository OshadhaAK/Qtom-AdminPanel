import { Component, OnInit, Input, ChangeDetectorRef,ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-modalupdateform',
  templateUrl: './modalupdateform.component.html',
  styleUrls: ['./modalupdateform.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalupdateformComponent implements OnInit {
  @Input() public Name;
  @Input() public ID;
  @Input() public Description;
  success: any;
  constructor(private cd:ChangeDetectorRef) { }

  ngOnInit() {
  }
  save(id:any){
    this.success = true;
    setTimeout(() => {
      this.success = false;
    },1);
  }
}
