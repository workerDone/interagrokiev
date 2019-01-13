import { Component, OnInit, ViewChild } from '@angular/core';



import { SwiperComponent, SwiperDirective, SwiperConfigInterface,
  SwiperScrollbarInterface, SwiperPaginationInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  public disabled = false;

  public config: SwiperConfigInterface = {
    a11y: true,
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: true,
    pagination: true
  };
  num = true;
  slides = [
    {url: '../../../../../assets/slide-1.jpg'},
    {url: '../../../../../assets/slide-2.jpg'},
    {url: '../../../../../assets/slide-3.jpg'},
  ];
  @ViewChild(SwiperComponent) componentRef?: SwiperComponent;
  @ViewChild(SwiperDirective) directiveRef?: SwiperDirective;
  constructor() {}

  ngOnInit() {}

  get screen(): string {
    const {innerWidth, innerHeight} = window.self;

    this.num = +innerWidth > 600;

    return (innerHeight - ( this.num ? 64 : 56)) + 'px';
  }
  public onIndexChange(index: number): void {
    console.log('Swiper index: ', index);
  }

  public onSwiperEvent(event: string): void {
    console.log('Swiper event: ', event);
  }
}
