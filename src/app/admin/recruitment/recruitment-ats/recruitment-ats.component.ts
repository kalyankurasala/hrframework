import { Component, OnInit } from '@angular/core';
import { RatingModule } from "ngx-rating";

@Component({
  selector: 'app-recruitment-ats',
  templateUrl: './recruitment-ats.component.html',
  styleUrls: ['./recruitment-ats.component.css'],
  directives: [Rating]
})
export class RecruitmentAtsComponent implements OnInit {
  starsCount: number;
  starsCounts: number[] = [];

  constructor() { }

  ngOnInit() {
  }

}
