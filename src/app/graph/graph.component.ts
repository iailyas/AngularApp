import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Graph } from '../models/Graph.Model';
import { GraphService } from '../services/graph.service';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent {
  Points: Graph[] = [];
  chartOptions = {
    animationEnabled: true,
    theme: "light",
    exportEnabled: false,
    title: {
      text: "Developer Work Week"
    },
    subtitles: [{
      text: "Median hours/week"
    }],
    data: [{
      type: "pie", //change type to column, line, area, doughnut, etc
      indexLabel: "{name}: {y}%",
      dataPoints: [] = this.Points
    }]
  }
  constructor(private router: Router, private graphService: GraphService, private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.graphService.GetAll().subscribe({
      next: (response: any) => { this.Points = response; console.log(this.Points); console.log(response) },
      error: (response: any) => { console.log(response) }
    });
  }
}            
