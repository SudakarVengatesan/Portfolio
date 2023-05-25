import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AboutusComponent } from './Main/aboutus/aboutus.component';
import { EducationComponent } from './Main/education/education.component';
import { ExperienceComponent } from './Main/experience/experience.component';
import { SkillsComponent } from './Main/skills/skills.component';
import { ContactusComponent } from './Main/contactus/contactus.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AboutusComponent,
    EducationComponent,
    ExperienceComponent,
    SkillsComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
