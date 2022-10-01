import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';


@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  public scrolledTop:boolean=true;
  public isMobile:boolean=true;
  public menuTitles:menuElement[] = [
    {title: "rólam",path: "aboutme"},
    {title:"elérhetőség",path:"contact"},
    {title:"galéria",path: "gallery"}]

  constructor() { }

  ngOnInit(): void {
    if(window.innerWidth>=1000){
      this.isMobile= false;
    }else{
      this.isMobile= true;
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event: any) {
    let element = document.querySelector('nav') as HTMLElement;
    if(window.innerWidth>=1000){
      if(window.pageYOffset > window.innerHeight-10){
        this.scrolledTop = false;
        this.checkScrollState();
      }else{
        this.scrolledTop= true;

      }
    }else{
      this.scrolledTop= true;
      this.isMobile= true;
    }

  }

  checkScrollState(){
    if(window.pageYOffset >window.innerHeight*3){
      this.setMenuTitles({title:"elérhetőség",path:"contact"},{title: "rólam",path: "aboutme"},{title:"galéria",path: "gallery"});
    }else if(window.pageYOffset >window.innerHeight*2){
      this.setMenuTitles({title:"galéria",path: "gallery"},{title:"elérhetőség",path:"contact"},{title: "rólam",path: "aboutme"});
    }else if(window.pageYOffset >window.innerHeight){
      this.setMenuTitles({title: "rólam",path: "aboutme"},{title:"elérhetőség",path:"contact"},{title:"galéria",path: "gallery"});
    }
  }

  setMenuTitles(actualTitle: menuElement, leftTitle: menuElement, rightTitle: menuElement){
    this.menuTitles= [actualTitle,leftTitle,rightTitle];
  }

}

interface menuElement{
  title: string,
  path: string
}
