import { Component, OnInit, ViewChild } from "@angular/core";

import {
  SwiperComponent,
  SwiperDirective,
  SwiperConfigInterface,
  SwiperScrollbarInterface,
  SwiperPaginationInterface
} from "ngx-swiper-wrapper";

@Component({
  selector: "app-default",
  templateUrl: "./default.component.html",
  styleUrls: ["./default.component.scss"]
})
export class DefaultComponent implements OnInit {
  public disabled = false;
  private scrollbar: SwiperScrollbarInterface = {
    el: ".swiper-scrollbar",
    hide: false,
    draggable: true
  };

  public config: SwiperConfigInterface = {
    a11y: true,
    autoplay: true,
    direction: "vertical",
    slidesPerView: 1,
    keyboard: true,
    mousewheel: true,
    scrollbar: this.scrollbar,
    navigation: false,
    pagination: false
  };
  num = true;

  slides = [
    { url: "../../../../../assets/slide-1.jpg" },
    { url: "../../../../../assets/slide-2.jpg" },
    { url: "../../../../../assets/slide-3.jpg" }
  ];
  @ViewChild(SwiperComponent) componentRef?: SwiperComponent;
  @ViewChild(SwiperDirective) directiveRef?: SwiperDirective;
  @ViewChild("swiper") swiper;
  constructor() {}

  ngOnInit() {}

  resume(e) {
    this.swiper.startAutoplay();
  }

}
