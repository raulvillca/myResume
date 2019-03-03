import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  information: any;
  constructor(private profile: ProfileService) { }

  ngOnInit() {
    this.getInformatio();
  }

  getInformatio() {
    this.profile.getInformation().subscribe(information => {
      this.information = information;
    });
  }
}
