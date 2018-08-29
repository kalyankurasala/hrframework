import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recruitment-ats',
  templateUrl: './recruitment-ats.component.html',
  styleUrls: ['./recruitment-ats.component.css'],
  
})
export class RecruitmentAtsComponent implements OnInit {
  starsCount: number;
  starsCounts: number[] = [];

  
  constructor() { }

  ngOnInit() {
  }

}
