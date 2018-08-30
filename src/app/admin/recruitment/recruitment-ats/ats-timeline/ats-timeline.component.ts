import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';

@Component({
  selector: 'app-ats-timeline',
  templateUrl: './ats-timeline.component.html',
  styleUrls: ['./ats-timeline.component.css']
})
export class AtsTimelineComponent implements OnInit {

 
  @ViewChild('addModal') public addModal: ModalDirective;
  ngOnInit(){

  }
  constructor() {}
  fnAddModal(flag) {
    if (flag == 1) {
      this.addModal.show();
    }
    else {
      this.addModal.hide();
    }
  }
}
