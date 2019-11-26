import { Component, OnInit, Input,ChangeDetectionStrategy, ChangeDetectorRef  } from '@angular/core';

@Component({
  selector: 'app-modalremoveconfirmation',
  templateUrl: './modalremoveconfirmation.component.html',
  styleUrls: ['./modalremoveconfirmation.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalremoveconfirmationComponent implements OnInit {

  @Input() public ID;
  delete: any;
  
  constructor(private cd:ChangeDetectorRef) {
    
   }

  ngOnInit() {
  }

  deleteItem(id:any){
    this.delete = true;
    
    setTimeout(() => {
      this.delete = false;
    },1);
    
  }
}
