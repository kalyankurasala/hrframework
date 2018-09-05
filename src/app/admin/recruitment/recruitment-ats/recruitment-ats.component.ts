import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from '../../../../../node_modules/ngx-bootstrap';
@Component({
  selector: 'app-recruitment-ats',
  templateUrl: './recruitment-ats.component.html',
  styleUrls: ['./recruitment-ats.component.css'],
})
export class RecruitmentAtsComponent implements OnInit {

  @ViewChild('addModal') public addModal: ModalDirective;
  selected: number = 1;


  constructor() { }

  ngOnInit() {
    }
  feedBackChange(e) {

    console.log(e)
  }

  fnAddModal(flag,flag2) {
    if (flag == 1) {
      this.addModal.show();
      this.selected = flag2;
    }
    else {
      this.addModal.hide();
    }
  }
  fntesting(flag) {
    this.selected = flag;
  }

}
