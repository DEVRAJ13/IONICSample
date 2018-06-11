import { Component, ViewChild , ElementRef,Renderer} from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';




@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  @ViewChild(Content) content: Content;
start = 0;
threshold = 100;
slideHeaderPrevious = 0;
ionScroll:any;
showheader:boolean;
hideheader:boolean;
headercontent:any;
items:any;

  constructor(public navCtrl: NavController,public renderer: Renderer ,public myElement: ElementRef,public navParams: NavParams) {
    this.showheader =false;
    this.hideheader = true;

    this.items = [];
    for (let i = 0; i < 100; i++) {
      this.items[i] = {
        'name': i
      }
    }
  
  }
  ngOnInit() {
    // Ionic scroll element
    this.ionScroll = this.myElement.nativeElement.getElementsByClassName("scroll-content")[0];
    // On scroll function
    this.ionScroll.addEventListener("scroll", () => {
    if(this.ionScroll.scrollTop - this.start > this.threshold) {
    this.showheader =true;
    this.hideheader = false;
    } else {
    this.showheader =false;
    this.hideheader = true;
    }
    if (this.slideHeaderPrevious >= this.ionScroll.scrollTop - this.start) {
    this.showheader =false;
    this.hideheader = true;
    }
    this.slideHeaderPrevious = this.ionScroll.scrollTop - this.start;
    });
    }
    


}
