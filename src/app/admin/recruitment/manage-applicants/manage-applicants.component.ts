import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from '../../../../../node_modules/ngx-bootstrap';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-manage-applicants',
  templateUrl: './manage-applicants.component.html',
  styleUrls: ['./manage-applicants.component.css'],
})


export class ManageApplicantsComponent implements OnInit {
  @ViewChild('addApplicantModal') public addApplicantModal: ModalDirective;
  @ViewChild('deleteApplicantModal') public deleteApplicantModal: ModalDirective;
  @ViewChild('viewModal') public viewModal: ModalDirective;


  applicantAddEditForm: FormGroup;
  id: number;
  public shouldShow = false;

  constructor(private fb: FormBuilder) {
    this.fnApplicantAddEditForm();
  }

 fnApplicantAddEditForm() {

    this.applicantAddEditForm = this.fb.group({
      vcName: new FormControl,
      vcPhone: new FormControl,
      vcExperience: new FormControl,
      vcCategory: new FormControl,
      vcJobType: new FormControl,
      vcResumePath: new FormControl,
      dtUpdated: new FormControl
    });
  }

  tableList: Object[] = [
    { intApplicantId: 1, vcName: 'Mitchel Johnson', vcPhone: '1234567890', vcExperience: '3.5Y', vcCategory: 'IT', vcJobType: "Permanant", vcResumePath: "", dtUpdated: null },
    { intApplicantId: 2, vcName: 'Peter', vcPhone: '958462150', vcExperience: '2.5Y', vcCategory: 'IT', vcJobType: "Contract", vcResumePath: "", dtUpdated: null },
    { intApplicantId: 3, vcName: 'Mitchel', vcPhone: '785412547', vcExperience: '3.1Y', vcCategory: 'IT', vcJobType: "Permanant", vcResumePath: "", dtUpdated: null }
  ];

  ngOnInit() {

  }
  fnAddApplicantModal(flag) {
    if (flag == 1) {
      this.addApplicantModal.show();
    }
    else {
      this.addApplicantModal.hide();
    }
  }
  fnApplicantDeleteModal(flag) {
    if (flag == 1) {
      this.deleteApplicantModal.show();
    }
    else {
      this.deleteApplicantModal.hide();
    }
  }
  fnviewModalModal(flag){
    if (flag == 1) {
      this.viewModal.show();
    }
    else {
      this.viewModal.hide();
    }
  }
}


