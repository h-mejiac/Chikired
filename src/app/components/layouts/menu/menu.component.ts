import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    function navigation() {
      $(document).ready(function () {
        $('.menu-item-has-children > a').parent().append('<span class="dd-trigger"><i class="fas fa-angle-down"></i></span>');
      });
      $(".menu-item-has-children > a").on('click', function (e) {
        var submenu = $(this).next(".sub-menu");
        e.preventDefault();
        submenu.slideToggle(200);
      });
    }
    navigation();
  }

}
