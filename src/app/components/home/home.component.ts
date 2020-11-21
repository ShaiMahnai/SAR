import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', '../../styles/styles.scss']
})
export class HomeComponent implements OnInit {
  showFirst = 10;


  constructor() {
  }

  ngOnInit(): void {
  }


}
