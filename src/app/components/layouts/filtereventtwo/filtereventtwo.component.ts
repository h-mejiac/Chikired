import { Component, AfterViewInit } from '@angular/core';
import $ from 'jquery';
import 'magnific-popup';

@Component({
  selector: 'app-filtereventtwo',
  templateUrl: './filtereventtwo.component.html',
  styleUrls: ['./filtereventtwo.component.css']
})
export class FiltereventtwoComponent implements AfterViewInit {

  constructor() { }
  // Event box
  eventbg = 'assets/images/event-bg-2.jpg';
  shape4 = 'assets/images/shape/shape-4.png';
  shape5 = 'assets/images/shape/shape-5.png';
  eventbox = [
    { cat: 'cat1 cat3', img: 'assets/images/events-thumb-5.jpg', title: 'Dorex UI/UX Design Conference 2019', tag: 'Career, UI/UX, Design', user: 'Rosalina D. Willamson' },
    { cat: 'cat2 cat4', img: 'assets/images/events-thumb-5.jpg', title: 'Bolina Web Development Talk', tag: 'Career, UI/UX, Design', user: 'Rosalina D. Willamson' },
    { cat: 'cat3 cat1', img: 'assets/images/events-thumb-5.jpg', title: 'A4Tech Technology Fair 2019', tag: 'Career, UI/UX, Design', user: 'Rosalina D. Willamson' },
    { cat: 'cat4 cat2', img: 'assets/images/events-thumb-5.jpg', title: 'Murax Decoraga Conference 2019', tag: 'Career, UI/UX, Design', user: 'Rosalina D. Willamson' },
  ];

  ngAfterViewInit(): void {
    // Video popup
    ($('.video-popup') as any).magnificPopup({
      type: 'iframe',
    });
    // Filter
    function filter() {
      $(document).ready(function () {
        $(".event-btn").click(function () {
          var value = $(this).attr('data-filter');
          if (value == "all") {
            $('.filter-item').show('1000');
          }
          else {
            $(".filter-item").not('.' + value).hide('3000');
            $('.filter-item').filter('.' + value).show('3000');
          }
        });
      });
      $(".event-btn").click(function () {
        if (!$(this).hasClass('active_btn')) {
          $(".event-btn").removeClass("active_btn");
          $(this).addClass("active_btn");
        }
      });
    }
    filter();
  }

}
