import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-section',
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.scss']
})
export class ProjectsSectionComponent implements OnInit {

  project1Url = '../../../assets/images/cat1.jpeg';
  project2Url = '../../../assets/images/cat2.jpeg';
  project3Url = '../../../assets/images/cat3.jpeg';
  

  constructor() { }

  ngOnInit() {
  }

}
