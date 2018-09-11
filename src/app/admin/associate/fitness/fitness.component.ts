import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-fitness',
  templateUrl: './fitness.component.html',
  styleUrls: ['./fitness.component.css']
})
export class FitnessComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  BPchart = new Chart({
    chart: {
      type: 'line'
    },
    credits: {
      enabled: false
    },
    title: {
      text: 'BP TREND'
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      title: {
        text: 'Heart Rate(Pulse)'
      }

    },
    yAxis: {
      title: {
        text: 'Blood Pressure'
      }
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'top'
    },
    plotOptions: {
      line: {
        dataLabels: {
          enabled: true
        },
        enableMouseTracking: true
      }
    },
    series: [{
      name: 'Systolic',
      data: [120, 120, 120, 120, 135, 135, 135, 135, 120, 120, 120, 120]
    }, {
      name: 'Diastolic',
      data: [80, 80, 80, 70, 70, 70, 90, 90, 90, 80, 80, 80]
    }]
  });


  BMIchart = new Chart({
    chart: {
      type: 'line'
    },
    credits: {
      enabled: false
    },
    title: {
      text: 'BODY MASS INDEX'
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    yAxis: {
      title: {
        text: 'BMI'
      }
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'top'
    },
    plotOptions: {
      line: {
        dataLabels: {
          enabled: true
        },
        enableMouseTracking: true
      }
    },
    series: [{
      name: 'BMI',
      data: [18, 18, 17.5, 15.7, 20, 21, 22, 21.5, 22.4, 20.4, 19,20]
    }]
  });

  pulsechart = new Chart({
    chart: {
      type: 'line'
    },
    credits: {
      enabled: false
    },
    title: {
      text: 'HEART RATE (PULSE)'
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    yAxis: {
      title: {
        text: 'Pulse'
      }
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'top'
    },
    plotOptions: {
      line: {
        dataLabels: {
          enabled: true
        },
        enableMouseTracking: true
      }
    },
    series: [{
      name: 'Pulse',
      data: [75,72,72,72,80,80,80,80,82,82,82,82]
    }]
  });

  FPchart = new Chart({
    chart: {
      type: 'line'
    },
    credits: {
      enabled: false
    },
    title: {
      text: 'FAT PERCENTAGE'
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    yAxis: {
      title: {
        text: 'FAT CONTENT(in Percentage)'
      }
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'top'
    },
    plotOptions: {
      line: {
        dataLabels: {
          enabled: true
        },
        enableMouseTracking: true
      }
    },
    series: [{
      name: 'Fat Percentage',
      data: [25, 25, 25, 25, 22, 22, 22, 22, 29, 29, 29, 29]
    }]
  });
}
