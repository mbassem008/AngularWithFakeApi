import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { WorldCupComponent } from './components/world-cup/world-cup.component';
import { ResultComponent } from './components/result/result.component';
import { NewsComponent } from './components/news/news.component';
import { ScoresComponent } from './components/scores/scores.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AdminComponent } from './components/admin/admin.component';
import { AllMatchesComponent } from './components/all-matches/all-matches.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from "../app/services/data.service";
import { HttpClientModule } from '@angular/common/http';
import { DisplayMatchComponent } from './components/display-match/display-match.component';
import { Login1Component } from './components/login1/login1.component';
import { PlayerComponent } from './player/player.component';
import { DisplayPlayerComponent } from './display-player/display-player.component';
import { EditComponent } from './components/edit/edit.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    WorldCupComponent,
    ResultComponent,
    NewsComponent,
    ScoresComponent,
    BlogComponent,
    AddPlayerComponent,
    AddMatchComponent,
    AdminComponent,
    AllMatchesComponent,
    DisplayMatchComponent,
    Login1Component,
    PlayerComponent,
    DisplayPlayerComponent,
    EditComponent,
    EditMatchComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(DataService),
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
