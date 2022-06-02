import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { AdComp } from './ad-comp.model';
import { HeroJobAdComponent } from './ero-job-ad.component';
import { HeroProfileComponent } from './her0-profile.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'app';
  quest = ["df","ds", "sd"]

  ads: any;
  // module = `${tititle}`  

  ngOnInit() {

    
    var i = 1;
    var subject = new Subject<number>();
var subscriber1 = subject.subscribe({
  next(value) {
    console.log(`subscriber1: ` + value);
  }
});

var subscriber2 = subject.subscribe({
  next(value) {
    console.log(`subscriber2: ` + value);
  }
});
subject.next(i);
i+=1;
subject.next(i);
    var observable = new Observable(observer => {
      try {
        observer.next(i);
        i += 1;
        i += 1;
        i += 1;
        i += 1;
        observer.next(i);
      }
      catch (err) {
        observer.error(err);
      }
    });
     
    var subscriber1 = observable.subscribe({
      next(val) {
        console.log(`Observer1: ` + val);
      },
      complete() {
        console.log(`Complete msg`);
      },
      error(err) {
        console.error(`Observable error is` + err);
      }
    });
     
    var subscriber2 = observable.subscribe({
      next(val) {
        console.log(`Observer2: ` + val);
      },
      complete() {
        console.log(`Complete msg`);
      },
      error(err) {
        console.error(`Observable error is` + err);
      }
    });

    var subscriber3 = observable.subscribe({
      next(val) {
        console.log(`Observer3: ` + val);
      },
      complete() {
        console.log(`Complete msg`);
      },
      error(err) {
        console.error(`Observable error is` + err);
      }
    });
    this.ads = [
        new AdComp(
          HeroProfileComponent,
          { name: 'Bombasto', bio: 'Brave as they come' }
        ),
        new AdComp(
          HeroProfileComponent,
          { name: 'Dr IQ', bio: 'Smart as they come' }
        ),
        new AdComp(
          HeroJobAdComponent,
          { headline: 'Hiring for several positions', body: 'Submit your resume today!' }
        ),
        new AdComp(
          HeroJobAdComponent,
          { headline: 'Openings in all departments', body: 'Apply today' }
        )
      ];
  }
}
