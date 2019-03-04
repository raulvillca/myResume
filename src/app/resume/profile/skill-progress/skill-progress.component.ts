import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skill-progress',
  styleUrls: ['./skill-progress.component.css'],
  template: `
<div class="">
  <div>
      <span class="progress-badge">{{title}}</span>
      <span class="progress-badge skill-label-r">{{progress}}</span>
  </div>
  <div class="skill-progress-container">
    <div class="skill-progress" *ngFor="let item of items" [ngClass]="{'c-skill-b':item, 'c-skill-bl':!item}"></div>
  </div>
</div>`
})
export class SkillProgressComponent implements OnInit {

  @Input() title: string;
  @Input() progress: string;
  @Input() lvl: number;
  @Input() max: number;
  items = [];

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
