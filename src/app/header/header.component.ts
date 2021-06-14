import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  items: MenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: '/'
      },
      {
        label: 'History',
        icon: 'pi pi-fw pi-clock',
        routerLink: '/TempHistory'
      },
      {
        label: 'Connected sensors',
        icon: 'pi pi-fw pi-wifi',
        routerLink: '/ConnectedSensors'
      }
    ];
  }

}
