import { Component, ComponentFactoryResolver, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { AdComp } from '../ad-comp.model';
import { AdDirDirective } from '../ad-dir.directive';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.sass']
})
export class ChildComponent implements OnInit, OnDestroy {

  @Input() myvar = "film"
  @Output() myemit = new EventEmitter()
  currentIndex = 0;
  @Input() ads: AdComp[]
  @ViewChild(AdDirDirective,{static:true}) adview:AdDirDirective;

  private darbar = "my darbar"
  interval: any;
  constructor(private componentfactory: ComponentFactoryResolver) { }

  ngOnInit(): void {
    this.insetAd()
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  insetAd() {
    this.interval = setInterval(() => {
      if(this.ads.length > this.currentIndex ) {
        const factory = this.componentfactory.resolveComponentFactory(this.ads[this.currentIndex].component)
        const view = this.adview.view
        view.clear();
        const compFactory = view.createComponent<{data:any}>(factory)
        compFactory.instance.data = this.ads[this.currentIndex].data;
      }
      this.currentIndex ++;
      if (this.currentIndex === this.ads.length) {
        this.currentIndex = 0
      }
    }, 1000)

    
  
  }




}
