import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-hometwo',
  templateUrl: './hometwo.component.html',
  styleUrls: ['./hometwo.component.css']
})
export class HometwoComponent implements AfterViewInit {

  constructor() { }
  // Banner
  bannerbg = 'assets/images/banner-bg-2.jpg';
  shape2 = 'assets/images/shape/shape-2.png';
  shape3 = 'assets/images/shape/shape-3.png';
  // About
  aboutimg = 'assets/images/about-2.jpg';
  // Team
  teamblock = [
    { img: 'assets/images/event-5.jpg', name: 'Rosalina William', post: 'UX DESIGN' },
    { img: 'assets/images/event-6.jpg', name: 'Catherine Crain', post: 'CEO' },
    { img: 'assets/images/event-7.jpg', name: 'David Hald', post: 'HEAD OF TECHNOLOGY' },
    { img: 'assets/images/event-8.jpg', name: 'Sheila Monta', post: 'HEAD OF FINANCE' },
    { img: 'assets/images/event-9.jpg', name: 'Rosalina William', post: 'UX DESIGN' },
    { img: 'assets/images/event-10.jpg', name: 'Catherine Crain', post: 'CEO' },
    { img: 'assets/images/event-11.jpg', name: 'David Hald', post: 'HEAD OF TECHNOLOGY' },
    { img: 'assets/images/event-12.jpg', name: 'Sheila Monta', post: 'HEAD OF FINANCE' },
  ];
  
  // App
  appimg = 'assets/images/app-1.png';
  contactbg = 'assets/images/contact-bg-2.jpg';
  // Blog post
  blogpost = [
    { img: 'assets/images/blog-1.jpg', title: '5 Tips for Creating Content That’s Educational', text: 'Lorem ipsum dolor sit amet, consect etur adipisicin gelit, sed do eiusmod tempor incididunt ut labore.', date: '23rd May 2020', author: 'Admin' },
    { img: 'assets/images/blog-2.jpg', title: '5 Tips for Creating Content That’s Educational', text: 'Lorem ipsum dolor sit amet, consect etur adipisicin gelit, sed do eiusmod tempor incididunt ut labore.', date: '23rd May 2020', author: 'Admin' },
    { img: 'assets/images/blog-3.jpg', title: '5 Tips for Creating Content That’s Educational', text: 'Lorem ipsum dolor sit amet, consect etur adipisicin gelit, sed do eiusmod tempor incididunt ut labore.', date: '23rd May 2020', author: 'Admin' },
    { img: 'assets/images/blog-1.jpg', title: '5 Tips for Creating Content That’s Educational', text: 'Lorem ipsum dolor sit amet, consect etur adipisicin gelit, sed do eiusmod tempor incididunt ut labore.', date: '23rd May 2020', author: 'Admin' },
    { img: 'assets/images/blog-2.jpg', title: '5 Tips for Creating Content That’s Educational', text: 'Lorem ipsum dolor sit amet, consect etur adipisicin gelit, sed do eiusmod tempor incididunt ut labore.', date: '23rd May 2020', author: 'Admin' },
    { img: 'assets/images/blog-3.jpg', title: '5 Tips for Creating Content That’s Educational', text: 'Lorem ipsum dolor sit amet, consect etur adipisicin gelit, sed do eiusmod tempor incididunt ut labore.', date: '23rd May 2020', author: 'Admin' },
  ];
  blogConfig = {
    arrows: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    speed: 1500,
    prevArrow: '#arrows .arrow.prev',
    nextArrow: '#arrows .arrow.next',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  ngAfterViewInit(): void {
    
  }

}
