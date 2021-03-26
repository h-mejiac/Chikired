import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footertwo',
  templateUrl: './footertwo.component.html',
  styleUrls: ['./footertwo.component.css']
})
export class FootertwoComponent implements OnInit {

  constructor() { }
  footerbg = 'assets/images/footer-2.jpg';
  logo = 'assets/images/logo-1.png';

  ngOnInit(): void {
  }

}
