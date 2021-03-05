import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AdminComponent } from './components/admin/admin.component';
import { AllMatchesComponent } from './components/all-matches/all-matches.component';
import { DisplayMatchComponent } from './components/display-match/display-match.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { EditComponent } from './components/edit/edit.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { Login1Component } from './components/login1/login1.component';
import { SignupComponent } from './components/signup/signup.component';
import { DisplayPlayerComponent } from './display-player/display-player.component';
import { PlayerComponent } from './player/player.component';


const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'header', component:HeaderComponent},
  {path:'footer', component:FooterComponent},
  {path:'', component:HomeComponent},
  {path:'sign-up', component:SignupComponent},
  {path:'add-player', component:AddPlayerComponent},
  {path:'add-match', component:AddMatchComponent },
  {path:'admin', component:AdminComponent },
  {path:'all-matches', component:AllMatchesComponent },
  {path:'displayMatch/:id', component:DisplayMatchComponent },
  {path:'login1', component:Login1Component},
  {path:'player', component:PlayerComponent},
  {path:'displayPlayer/:id', component:DisplayPlayerComponent},
  {path:'add-player/:id', component:AddPlayerComponent},
  {path:'edit/:id', component:EditComponent},
  {path:'edit-match/:id', component:EditMatchComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
