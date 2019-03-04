import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skill-progress',
  templateUrl: './skill-progress.component.html',
  styleUrls: ['./skill-progress.component.css']
})
export class SkillProgressComponent implements OnInit {

  @Input() title: string;
  @Input() progress: string;
  @Input() lvl: number;
  @Input() max: number;
  private items = [];

  constructor() {}

  ngOnInit() {
    for(let i = 0; i < this.max; i++) {
      this.items[i] = false;
    }
    for(let i = 0; i < this.lvl; i++) {
      this.items[i] = true;
    }
  }


}
