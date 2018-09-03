import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { ModalDirective, BsModalService } from 'ngx-bootstrap';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ManagejobsApplicants } from './managejobs-applicants';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-manage-jobs',
  templateUrl: './manage-jobs.component.html',
  styleUrls: ['./manage-jobs.component.css']
})

export class ManageJobsComponent implements OnInit {
  modalRef: BsModalRef;
  config = {
    ignoreBackdropClick: true
  };
 
 
  tableList: Object[] = [
    { intid: 1, vcPosition: 'Developer', vcSkills: ' .Net', vcDescription: 'This is .Net Developer', vcVideoJD: ' ',dtTargetDate:'23/09/2018',intPositions:"1/3",vcExperience:'2-4' },
    { intid: 2, vcPosition: 'Developer', vcSkills: 'Java', vcDescription: 'This is Java Developer', vcVideoJD: ' ',dtTargetDate:'03/10/2018',intPositions:"2/3",vcExperience:'0-2' },
    { intid: 3, vcPosition: 'Developer', vcSkills: 'Android', vcDescription: 'This is Android Developer', vcVideoJD: ' ',dtTargetDate:'23/09/2018',intPositions:"0/1",vcExperience:'0-1' },
    { intid: 4, vcPosition: 'Developer', vcSkills: 'PHP', vcDescription: 'This is for PHP Developer', vcVideoJD: ' ',dtTargetDate:'15/09/2018',intPositions:"1/3",vcExperience:'2-3' }
  ];

  userEditForm: FormGroup;

  constructor(private fb: FormBuilder,private modalService: BsModalService) {
    this.createEditForm();
  }


  ngOnInit() {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
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
