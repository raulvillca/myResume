import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  skills: any;
  constructor(private profile: ProfileService) { }

  ngOnInit() {
    this.getSkills();
  }

  getSkills(){
    this.profile.getSkills().subscribe(skills => {
      this.skills = skills;
    });
  }
}
