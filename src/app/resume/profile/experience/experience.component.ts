import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experiences : any;
  constructor(private profile: ProfileService) { }

  ngOnInit() {
    this.getExperiences();
  }

  getExperiences() {
    this.profile.getExperiences().subscribe(experiences => { 
      this.experiences = experiences; 
  });
  }

}
