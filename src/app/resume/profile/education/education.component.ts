import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  educations: any;

  constructor(
    private profile: ProfileService
  ) { }

  ngOnInit() {
    this.getEducation();
  }

  getEducation() {
    this.profile.getEducations().subscribe(educations => {
      this.educations = educations;
    });
  }
}
