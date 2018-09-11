import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-alignment',
  templateUrl: './alignment.component.html',
  styleUrls: ['./alignment.component.css']
})
export class AlignmentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  quartileChart = new Chart({
    chart: {
        type: 'line'
    },
    title: {
        text: 'Quartile Ranking'
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
        categories: ['Q0', 'Q4', 'Q3', 'Q2', 'Q1']
    },
    plotOptions: {
        line: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: false
        }
    },
    series: [{
        name: 'Quartile Ranking',
        data: [1, 2, 3, 4, 3, 2, 1, 2, 1, 3, 4, 1]
    } ]
});
}
