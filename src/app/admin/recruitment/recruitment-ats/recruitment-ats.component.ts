import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recruitment-ats',
  templateUrl: './recruitment-ats.component.html',
  styleUrls: ['./recruitment-ats.component.css'],
})
export class RecruitmentAtsComponent implements OnInit {
  starsCount: number=2;
  starsCounts: number[] = [];


  constructor() { }

  ngOnInit() {
  }
  feedBackChange(e) {

    console.log(e)
  }
}
