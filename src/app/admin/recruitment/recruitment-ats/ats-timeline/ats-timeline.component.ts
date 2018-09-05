import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-ats-timeline',
  templateUrl: './ats-timeline.component.html',
  styleUrls: ['./ats-timeline.component.css']
})
export class AtsTimelineComponent implements OnInit {

  @ViewChild('deleteModal') public deleteModal: ModalDirective;
  @ViewChild('addModal') public addModal: ModalDirective;
  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  selectedValue: number;
  selected: 1;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
   thirdFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}


  fnAddModal(flag, flag2) {
    if (flag == 1) {
      this.addModal.show();
      this.selected = flag2;
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

  fntesting(flag) {
    this.selected = flag;
    console.log(this.selected);
  }
}
