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
      dtUpdated: new FormControl,
      vcEmail: new FormControl,
      vcPosition: new FormControl,
      intIQ: new FormControl,
      vcSkills: new FormControl,
      vcHRRecruiter: new FormControl,
      vcReferral: new FormControl,
      vcProcess: new FormControl
    });
  }

  tableList: Object[] = [
    { intApplicantId: 1, vcName: 'Gopal', vcEmail: "gopal@gmail.com", vcPhone: '1234578945', vcPosition:"Developer", vcSkills:".Net", vcExperience: '3.5', vcCategory: 'IT', vcJobType: "Permanant", vcResumePath: "", dtUpdated: null,intIQ:100,vcReferral:"Yes",vcHRRecruiter:"Syeda",vcProcess:"4/15" },
    { intApplicantId: 2, vcName: 'Krishna', vcEmail: "krishna@gmail.com", vcPhone: '958462150', vcPosition:"Developer", vcSkills:"PHP", vcExperience: '2.5', vcCategory: 'IT', vcJobType: "Contract", vcResumePath: "", dtUpdated: null,intIQ:110,vcReferral:"No",vcHRRecruiter:"Siva",vcProcess:"8/15" },
    { intApplicantId: 3, vcName: 'Kamal', vcEmail: "kamal@gmail.com", vcPhone: '785412547', vcPosition:"Developer", vcSkills:"Java", vcExperience: '3.1', vcCategory: 'IT', vcJobType: "Permanant", vcResumePath: "", dtUpdated: null,intIQ:108,vcReferral:"Yes",vcHRRecruiter:"Syeda",vcProcess:"2/15" }
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
  fnviewModalModal(flag) {
    if (flag == 1) {
      this.viewModal.show();
    }
    else {
      this.viewModal.hide();
    }
  }
}


