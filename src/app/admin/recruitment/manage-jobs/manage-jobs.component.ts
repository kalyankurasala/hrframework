import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { FormGroup, FormBuilder,  FormControl } from '@angular/forms';

@Component({
  selector: 'app-manage-jobs',
  templateUrl: './manage-jobs.component.html',
  styleUrls: ['./manage-jobs.component.css']
})
export class ManageJobsComponent implements OnInit {
  
  
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
