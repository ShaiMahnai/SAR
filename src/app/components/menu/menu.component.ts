import {Component, Input, OnInit} from '@angular/core';
import {MENU_ITEMS} from '../../app.consts';
import {MenuItem} from '../../app.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() className: string;
  @Input() menuName: string;

  menuItems: MenuItem[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.menuItems = MENU_ITEMS;
  }

}
