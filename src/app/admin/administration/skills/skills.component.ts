import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  weight: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {  name: 'Hydrogen', weight: 1.0079},
  {  name: 'Helium', weight: 4.0026 },
  { name: 'Lithium', weight: 6.941 },
  { name: 'Beryllium', weight: 9.0122 },
  {  name: 'Boron', weight: 10.811},
  {  name: 'Carbon', weight: 12.0107},
  { name: 'Nitrogen', weight: 14.0067 },
  { name: 'Oxygen', weight: 15.9994 },
  { name: 'Fluorine', weight: 18.9984 },
  {  name: 'Neon', weight: 20.1797 },
];


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  displayedColumns: string[] = [ 'Skill', 'Description', 'Action'];
  dataSource = ELEMENT_DATA;
}
