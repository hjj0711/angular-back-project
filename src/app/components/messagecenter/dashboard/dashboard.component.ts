import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  array = ['assets/image/1.jpg', 'assets/image/2.jpg', 'assets/image/3.jpg', 'assets/image/4.jpg'];
  constructor() { }

  ngOnInit(): void {
  }

}
