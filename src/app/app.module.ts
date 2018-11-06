import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CenterWindowComponent } from './center-window/center-window.component';
import { ProjectsSectionComponent } from './projects-section/projects-section.component';
import { ProjectComponent } from './projects-section/project/project.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { HelloComponent } from './hello/hello.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CenterWindowComponent,
    ProjectsSectionComponent,
    ProjectComponent,
    AboutSectionComponent,
    ContactSectionComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
