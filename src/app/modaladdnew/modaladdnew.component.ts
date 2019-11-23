import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modaladdnew',
  templateUrl: './modaladdnew.component.html',
  styleUrls: ['./modaladdnew.component.sass']
})
export class ModaladdnewComponent implements OnInit {

  success: any;
  constructor() { }

  ngOnInit() {
  }
  save(id:any){
    this.success = true;

  }
}
