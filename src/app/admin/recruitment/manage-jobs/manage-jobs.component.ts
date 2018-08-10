import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { FormGroup, FormBuilder,  FormControl } from '@angular/forms';
import { ManagejobsApplicants } from '../manage-jobs/managejobs-applicants';

@Component({
  selector: 'app-manage-jobs',
  templateUrl: './manage-jobs.component.html',
  styleUrls: ['./manage-jobs.component.css']
})
export class ManageJobsComponent implements OnInit {


  tableList:ManagejobsApplicants[]=[
    { job: 'PHP', code: ' php1234', Description: 'This is Php', VideoJD:  ' ' },
    { job: '.NET', code: '.net2345', Description: 'This is .Net', VideoJD:  ' ' },
    { job: 'ANDROID', code: 'and4567', Description: 'This is Android', VideoJD: ' ' },
    { job: 'IOS', code: 'ios0987', Description: 'This is IOS', VideoJD: ' ' }
  ];

  userEditForm: FormGroup;


  constructor(private fb: FormBuilder) {
    this.createEditForm();
  }
  ngOnInit() {
  }
  createEditForm() {
    this.userEditForm = this.fb.group({
      FirstName: new FormControl,
      Lastname: new FormControl,
      EmailID: new FormControl
    });
  }
  @ViewChild('addUserModal') public addUserModal: ModalDirective;

  AddUserModalfn(e) {
    if (e != 0) {
      this.addUserModal.show();
    } else {
      this.addUserModal.hide();
    }
  }
}
