import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  single: any[];
  view: any[] = [310, 180];

  // options
  showLegend = false;
  gradient = true;
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // pie
  showLabels = true;
  explodeSlices = false;
  doughnut = true;

  constructor() {
    Object.assign(this, {single})   
  }
  
  onSelect(event) {
    console.log(event);
  }

  ngOnInit() {
  }

}

export var single = [
  {
    "name": "Connection",
    "value": 9
  },
  {
    "name": "Liability",
    "value": 6
  },
  {
    "name": "Improvement",
    "value": 3
  },
  {
    "name": "Context",
    "value": 7
  },
  {
    "name": "acKnowledge",
    "value": 5
  }
];

