import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AboutusComponent } from './main/aboutus/aboutus.component';
import { EducationComponent } from './main/education/education.component';
import { ExperienceComponent } from './main/experience/experience.component';
import { SkillsComponent } from './main/skills/skills.component';
import { ContactusComponent } from './main/contactus/contactus.component';

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
