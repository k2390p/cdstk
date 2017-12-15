import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Slides } from 'ionic-angular';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }

  @ViewChild('slides') slides: Slides;
  
  @ViewChild('one') one;

  iconDiv1: boolean = false;
  iconDiv2: boolean = false;
  iconDiv3: boolean = false;
  iconDiv4: boolean = false;
  iconDiv5: boolean = false;
  iconDiv6: boolean = false;
  iconDiv7: boolean = false;
  iconDiv8: boolean = false;
  iconDiv9: boolean = false;
  iconDiv10: boolean = false;
  iconDiv11: boolean = false;
  iconDiv12: boolean = false;
  iconDiv13: boolean = false;
  iconDiv14: boolean = false;
  iconDiv15: boolean = false;
  iconDiv16: boolean = false;
  iconDiv17: boolean = false;
  iconDiv18: boolean = false;
  iconDiv19: boolean = false;
  iconDiv20: boolean = false;
  iconDiv21: boolean = false;
  iconDiv22: boolean = false;
  iconDiv23: boolean = false;
  iconDiv24: boolean = false;
  iconDiv25: boolean = false;
  iconDiv26: boolean = false;
  iconDiv27: boolean = false;
  iconDiv28: boolean = false;
  iconDiv29: boolean = false;
  iconDiv30: boolean = false;
  iconDiv31: boolean = false;
  iconDiv32: boolean = false;
  iconDiv33: boolean = false;
  iconDiv34: boolean = false;
  iconDiv35: boolean = false;
  iconDiv36: boolean = false;
  iconDiv37: boolean = false;
  iconDiv38: boolean = false;
  iconDiv39: boolean = false;
  iconDiv40: boolean = false;
  iconDiv41: boolean = false;
  
  count:any=0;

  
  
  cardSelected(value) {
    if (value == "iconDiv1") {

      this.iconDiv1 = true;
      this.iconDiv2 = false;
    }
    if (value == "iconDiv2") {
      this.iconDiv2 = true;
      this.iconDiv1 = false;
    }
    if (value == "iconDiv3") {
      this.iconDiv3 = true;
      this.iconDiv4 = false;
      this.iconDiv5 = false;
      this.iconDiv6 = false;
    }
    if (value == "iconDiv4") {
      this.iconDiv4 = true;
      this.iconDiv3 = false;
      this.iconDiv5 = false;
      this.iconDiv6 = false;
    }
    if (value == "iconDiv5") {
      this.iconDiv5 = true;
      this.iconDiv4 = false;
      this.iconDiv3 = false;
      this.iconDiv6 = false;
    }
    if (value == "iconDiv6") {
      this.iconDiv6 = true;
      this.iconDiv4 = false;
      this.iconDiv5 = false;
      this.iconDiv3 = false;
    }
    if (value == "iconDiv7") {

      this.iconDiv7 = true;
      this.iconDiv8 = false;
      this.iconDiv9 = false;
      
    }
    if (value == "iconDiv8") {
      this.iconDiv8 = true;
      this.iconDiv7 = false;
      this.iconDiv9 = false;
      
    }
    if (value == "iconDiv9") {
      this.iconDiv8 = false;
      this.iconDiv7 = false;
      this.iconDiv9 = true;
      
    }

    if (value == "iconDiv10") {
      this.iconDiv10 = true;
      this.iconDiv11 = false;
    }
    if (value == "iconDiv11") {
      this.iconDiv10 = false;
      this.iconDiv11 = true;
    }

    if (value == "iconDiv12") {
      this.iconDiv12 = true;
      this.iconDiv13 = false;
    }
    if (value == "iconDiv13") {
      this.iconDiv12 = false;
      this.iconDiv13 = true;
    }

    if (value == "iconDiv14") {
      this.iconDiv14 = true;
      this.iconDiv15 = false;
      this.iconDiv16 = false;
      
    }
    if (value == "iconDiv15") {
      this.iconDiv14 = false;
      this.iconDiv15 = true;
      this.iconDiv16 = false;
    }
    if (value == "iconDiv16") {
      this.iconDiv14 = false;
      this.iconDiv15 = false;
      this.iconDiv16 = true;
    }

    if (value == "iconDiv17") {
      this.iconDiv17 = true;
      this.iconDiv18 = false;
    }
    if (value == "iconDiv18") {
      this.iconDiv17 = false;
      this.iconDiv18 = true;
    }

    if (value == "iconDiv19") {
      this.iconDiv19 = true;
      this.iconDiv20 = false;
    }
    if (value == "iconDiv20") {
      this.iconDiv19 = false;
      this.iconDiv20 = true;
    }

    if (value == "iconDiv21") {
      this.iconDiv21 = true;

      this.iconDiv22 = false;
    }
    if (value == "iconDiv22") {
      this.iconDiv21 = false;
      this.iconDiv22 = true;
    }
    if (value == "iconDiv23") {
      this.iconDiv23 = true;
      this.iconDiv24 = false;
    }
    if (value == "iconDiv24") {
      this.iconDiv23 = false;
      this.iconDiv24 = true;
    }
    if (value == "iconDiv25") {
      this.iconDiv25 = true;
      this.iconDiv26 = false;
    }
    if (value == "iconDiv26") {
      this.iconDiv25 = false;
      this.iconDiv26 = true;
    }
    if (value == "iconDiv27") {
      this.iconDiv27 = true;
      this.iconDiv28 = false;
    }
    if (value == "iconDiv28") {
      this.iconDiv27 = false;
      this.iconDiv28 = true;
    }


    if (value == "iconDiv29") {
      this.iconDiv29 = true;
      this.iconDiv30 = false;
      this.iconDiv31 = false;
      
    }
    if (value == "iconDiv30") {
      this.iconDiv29 = false;
      this.iconDiv30 = true;
      this.iconDiv31 = false;
    }
    if (value == "iconDiv31") {
      this.iconDiv29 = false;
      this.iconDiv30 = false;
      this.iconDiv31 = true;
    }

    if (value == "iconDiv32") {
      this.iconDiv32 = true;
      this.iconDiv33 = false;
      this.iconDiv34 = false;
      this.iconDiv35 = false;
      
    }
    if (value == "iconDiv33") {
      this.iconDiv32 = false;
      this.iconDiv33 = true;
      this.iconDiv34 = false;
      this.iconDiv35 = false;
    }
    if (value == "iconDiv34") {
      this.iconDiv32 = false;
      this.iconDiv33 = false;
      this.iconDiv34 = true;
      this.iconDiv35 = false;
    }
    if (value == "iconDiv35") {
      this.iconDiv32 = false;
      this.iconDiv33 = false;
      this.iconDiv34 = false;
      this.iconDiv35 = true;
    }

    if (value == "iconDiv36") {
      this.iconDiv36 = true;
      this.iconDiv37 = false;
    }
    if (value == "iconDiv37") {
      this.iconDiv36 = false;
      this.iconDiv37 = true;
    }
    

    if (value == "iconDiv38") {
      this.iconDiv38 = true;
      this.iconDiv39 = false;
    }
    if (value == "iconDiv39") {
      this.iconDiv38 = false;
      this.iconDiv39 = true;
    }
    
    if (value == "iconDiv40") {
      this.iconDiv40 = true;
      this.iconDiv41 = false;
    }
    if (value == "iconDiv41") {
      this.iconDiv40 = false;
      this.iconDiv41 = true;
    }
    
    
    setTimeout(() => {
      this.nextSlide();
    }, 500);

  }
  nextSlide() {
    console.log("here");
    this.slides.realIndex = this.slides.realIndex + 1;
    this.slides.slideTo(this.slides.realIndex, 500);
  }

  prevSlide() {

    if (this.slides.realIndex != 0) {
      console.log(this.slides.realIndex)
      this.slides.realIndex = this.slides.realIndex - 1;
      this.slides.slideTo(this.slides.realIndex, 500);
    }

  }


}
