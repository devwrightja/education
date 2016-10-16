import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileCardComponent } from './dashboard/profile-card/profile-card.component';
import { ClubsCardComponent } from './dashboard/clubs-card/clubs-card.component';
import { NewPostComponent } from './dashboard/new-post/new-post.component';
import { PostCardComponent } from './dashboard/post-card/post-card.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    ProfileCardComponent,
    ClubsCardComponent,
    NewPostComponent,
    PostCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
