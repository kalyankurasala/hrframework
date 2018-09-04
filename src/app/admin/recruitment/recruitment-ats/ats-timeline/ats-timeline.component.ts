import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';


export interface process {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-ats-timeline',
  templateUrl: './ats-timeline.component.html',
  styleUrls: ['./ats-timeline.component.css']
})
export class AtsTimelineComponent implements OnInit {


  @ViewChild('deleteModal') public deleteModal: ModalDirective;
  @ViewChild('addModal') public addModal: ModalDirective;
  ngOnInit() {

  }

  selectedValue: number ;




  constructor() { }
  
  DDprocess: process[] = [
    {value: '1', viewValue: 'Initial HR round'},
    {value: '2', viewValue: 'IQ Test'},
    {value: '3', viewValue: 'First Validation'},
    {value: '4', viewValue: 'Second Validation'}
  ];
  
  
  fnAddModal(flag,flag2) {
    if (flag == 1) {
      this.selectedValue=flag2;
      this.addModal.show();
    }
    else {
      this.addModal.hide();
    }
  }
  fnDeleteModal(flag) {
    if (flag == 1) {
      this.deleteModal.show();
    }
    else {
      this.deleteModal.hide();
    }
  }

  fntesting(flag){
    console.log(flag);
    this.selectedValue = flag;
  }
}
