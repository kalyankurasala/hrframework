import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { FormGroup, FormBuilder,  FormControl } from '@angular/forms';

@Component({
  selector: 'app-manage-jobs',
  templateUrl: './manage-jobs.component.html',
  styleUrls: ['./manage-jobs.component.css']
})

class ManagejobsApplicants {
  intid:Number;
  vcJob:string;
  vcCode:string;
  vcDescription: string;
  vcVideoJD: string;
}

export class ManageJobsComponent implements OnInit {


  tableList:ManagejobsApplicants[]=[
    { intid:1, vcJob: 'PHP', vcCode: ' php1234', vcDescription: 'This is Php', vcVideoJD:  ' ' },
    { intid:2, vcJob: '.NET', vcCode: '.net2345', vcDescription: 'This is .Net', vcVideoJD:  ' ' },
    { intid:3,vcJob: 'ANDROID', vcCode: 'and4567', vcDescription: 'This is Android', vcVideoJD: ' ' },
    { intid:4,vcJob: 'IOS', vcCode: 'ios0987', vcDescription: 'This is IOS', vcVideoJD: ' ' }
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
