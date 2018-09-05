import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { DataSource } from '@angular/cdk/table';
import { ModalDirective } from 'ngx-bootstrap';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @ViewChild('addUserModal') public addUserModal: ModalDirective;
  @ViewChild('deleteUserModal') public deleteUserModal: ModalDirective;

  userAddEditForm: FormGroup;
  id: number;
  public shouldShow = false;

  constructor(private fb: FormBuilder) {
    this.fnUserAddEditForm();
  }
  fnUserAddEditForm() {
    this.userAddEditForm = this.fb.group({
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
    { intApplicantId: 1, vcName: 'Gopal', vcEmail: "gopal@gmail.com", vcPhone: '1234578945', vcPosition: "Developer", vcSkills: ".Net", vcExperience: '3.5', vcCategory: 'IT', vcJobType: "Permanant", vcResumePath: "", dtUpdated: null, intIQ: 100, vcReferral: "Yes", vcHRRecruiter: "Syeda", vcProcess: "4/15" },
    { intApplicantId: 2, vcName: 'Krishna', vcEmail: "krishna@gmail.com", vcPhone: '958462150', vcPosition: "Developer", vcSkills: "PHP", vcExperience: '2.5', vcCategory: 'IT', vcJobType: "Contract", vcResumePath: "", dtUpdated: null, intIQ: 110, vcReferral: "No", vcHRRecruiter: "Siva", vcProcess: "8/15" },
    { intApplicantId: 3, vcName: 'Kamal', vcEmail: "kamal@gmail.com", vcPhone: '785412547', vcPosition: "Developer", vcSkills: "Java", vcExperience: '3.1', vcCategory: 'IT', vcJobType: "Permanant", vcResumePath: "", dtUpdated: null, intIQ: 108, vcReferral: "Yes", vcHRRecruiter: "Syeda", vcProcess: "2/15" }
  ];

  ngOnInit() {

  }
  fnAddUserModal(flag) {
    if (flag == 1) {
      this.addUserModal.show();
    }
    else {
      this.addUserModal.hide();
    }
  }
  fnUserDeleteModal(flag) {
    if (flag == 1) {
      this.deleteUserModal.show();
    }
    else {
      this.deleteUserModal.hide();
    }
  }
}