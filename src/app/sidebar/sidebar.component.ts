import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    // { path: '/dashboard', title: 'Dashboard',  icon: 'pe-7s-graph', class: '' },
    { path: '/user', title: 'Malek Drissy',  icon:'pe-7s-user', class: '' },
    { path: '/LocalisationQuartier', title: 'Localisation de quartier',  icon:'pe-7s-map-marker', class: '' },
    { path: '/Delimitation', title: 'Délimitation',  icon:'pe-7s-map-marker', class: '' },
    { path: '/AichouchaRaoued', title: 'Vectorisation de quartier Aichoucha Raoued',  icon:'pe-7s-map-marker', class: '' },
    { path: '/amenagement', title: 'Données d\'aménagement ',  icon:'pe-7s-map-marker', class: '' },
    { path: '/Raoued', title: 'Raoued ',  icon:'pe-7s-map-marker', class: '' },
    { path: '/table', title: 'Table List',  icon:'pe-7s-note2', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
