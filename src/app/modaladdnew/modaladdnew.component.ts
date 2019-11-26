import { Component, OnInit,ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-modaladdnew',
  templateUrl: './modaladdnew.component.html',
  styleUrls: ['./modaladdnew.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModaladdnewComponent implements OnInit {

  successmsg: any;
  constructor(private cd:ChangeDetectorRef) { }

  ngOnInit() {
  }
  save(){
    this.successmsg = true;
    console.log(this.successmsg)
    setTimeout(() => {
      this.successmsg = false;
      console.log(this.successmsg)
    },10);
  }
}
