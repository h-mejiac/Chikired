import { Component, AfterViewInit } from '@angular/core';
import $ from 'jquery';
import 'magnific-popup';

@Component({
  selector: 'app-gallerytwo',
  templateUrl: './gallerytwo.component.html',
  styleUrls: ['./gallerytwo.component.css']
})
export class GallerytwoComponent implements AfterViewInit {

  constructor() { }
  // Gallery
  gallerypost = [
    {img:'assets/images/gallery-5.jpg'},
    {img:'assets/images/gallery-6.jpg'},
    {img:'assets/images/gallery-7.jpg'},
    {img:'assets/images/gallery-8.jpg'},
    {img:'assets/images/gallery-9.jpg'},
    {img:'assets/images/gallery-10.jpg'},
    {img:'assets/images/gallery-11.jpg'},
    {img:'assets/images/gallery-12.jpg'},
    {img:'assets/images/gallery-13.jpg'},
    {img:'assets/images/gallery-14.jpg'},
    {img:'assets/images/gallery-15.jpg'},
    {img:'assets/images/gallery-16.jpg'},
    {img:'assets/images/gallery-17.jpg'},
    {img:'assets/images/gallery-18.jpg'},
    {img:'assets/images/gallery-19.jpg'},
    {img:'assets/images/gallery-20.jpg'},
  ];

  ngAfterViewInit(): void {
    // Image popup
    ($('.image-popup') as any).magnificPopup({
      type: 'image',
      gallery:{
        enabled:true
      }
    });
  }

}
