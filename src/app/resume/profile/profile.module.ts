import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillComponent } from './skill/skill.component';
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';
import { InformationComponent } from './information/information.component';
import { ProfileComponent } from './profile.component';
import { NgxSpinnerModule } from 'node_modules/ngx-spinner';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SkillProgressComponent } from './skill-progress/skill-progress.component';

@NgModule({
  declarations: [
    ProfileComponent,
    FooterComponent, 
    HeaderComponent, 
    ExperienceComponent, 
    SkillComponent, 
    SkillProgressComponent,
    EducationComponent, 
    ContactComponent, 
    InformationComponent, 
    PortfolioComponent],
  imports: [
    FormsModule,
    NgxSpinnerModule,
    CommonModule,
    SnotifyModule,
    AngularFontAwesomeModule
  ],
  providers: [
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService,
  ]
})
export class ProfileModule { }
