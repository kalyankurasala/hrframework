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
    { mjob: 'PHP', mcode: ' php1234', mDescription: 'This is Php', mVideoJD:  ' ' },
    { mjob: '.NET', mcode: '.net2345', mDescription: 'This is .Net', mVideoJD:  ' ' },
    { mjob: 'ANDROID', mcode: 'and4567', mDescription: 'This is Android', mVideoJD: ' ' },
    { mjob: 'IOS', mcode: 'ios0987', mDescription: 'This is IOS', mVideoJD: ' ' }
  ];

  userEditForm: FormGroup;


  constructor(private fb: FormBuilder) {
    this.createEditForm();
  }
  ngOnInit() {
  }
  createEditForm() {
    this.userEditForm = this.fb.group({
      Job: new FormControl,
      Code: new FormControl,
      Description: new FormControl,
      VideoJD: new FormControl
    });
  }
  @ViewChild('addJobModal') public addJobModal: ModalDirective;
  @ViewChild('deleteJobModal') public deleteJobModal: ModalDirective;




  AddjobModalfn(e) {
    if (e != 0) {
      this.addJobModal.show();
    } else {
      this.addJobModal.hide();
    }
  }


  jobDeleteModal(e) {
    if (e != 0) {
      this.deleteJobModal.show();
    } else {
      this.deleteJobModal.hide();
    }
  }

}
