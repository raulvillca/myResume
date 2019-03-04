import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';

import { AppComponent } from './app.component';
import { ProfileComponent } from './resume/profile/profile.component';
import { ProfileModule } from './resume/profile/profile.module';
import { HttpClientModule } from '@angular/common/http';
import { InformationComponent } from './resume/profile/information/information.component';
import { SkillComponent } from './resume/profile/skill/skill.component';
import { ExperienceComponent } from './resume/profile/experience/experience.component';
import { EducationComponent } from './resume/profile/education/education.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent
  }
];

const config: ExtraOptions = {
  useHash: true
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, config),
    ProfileModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
