import { Component, HostListener, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-scrolltotop',
  templateUrl: './scrolltotop.component.html',
  styleUrls: ['./scrolltotop.component.scss']
})
  
export class ScrolltotopComponent implements OnInit {

  public pageYoffset = 0;
  @HostListener('window:scroll', ['$event']) onScroll(event: any){
    this.pageYoffset = window.pageYOffset;
  }

  constructor(private scroll: ViewportScroller) {
    
  }

  ngOnInit(): void {
  }


  scrollToTop(): void {
    this.scroll.scrollToPosition([0,0]);
  }
  
  
  

}
