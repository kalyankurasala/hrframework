import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from '../../../../../node_modules/ngx-bootstrap';
@Component({
  selector: 'app-recruitment-ats',
  templateUrl: './recruitment-ats.component.html',
  styleUrls: ['./recruitment-ats.component.css'],
})
export class RecruitmentAtsComponent implements OnInit {

  @ViewChild('addModal') public addModal: ModalDirective;
  starsCount: number=2;
  starsCounts: number[] = [];


  constructor() { }

  ngOnInit() {
  }
  feedBackChange(e) {

    console.log(e)
  }

  fnAddModal(flag) {
    if (flag == 1) {
      this.addModal.show();
    }
    else {
      this.addModal.hide();
    }
  }


}
