import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ChildComponent } from './child/child.component';
import { AdDirDirective } from './ad-dir.directive';
import { HeroJobAdComponent } from './ero-job-ad.component';
import { HeroProfileComponent } from './her0-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    AdDirDirective,
    HeroJobAdComponent,
    HeroProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
