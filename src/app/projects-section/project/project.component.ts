import { Component, OnInit, Input } from '@angular/core';
import {
  DomSanitizer
} from '@angular/platform-browser';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  @Input() imageUrl: string;
  @Input() projectTitle: string;
  imageSanitized;

  constructor(private sanitization: DomSanitizer) { }

  ngOnInit() {
    this.imageSanitized = this.sanitization.bypassSecurityTrustStyle(`url(${this.imageUrl})`);
  }

}
