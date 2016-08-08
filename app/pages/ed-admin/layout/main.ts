import {Component, ViewEncapsulation} from '@angular/core';
import { ROUTER_DIRECTIVES, Routes } from '@angular/router';

import {TopNavComponent} from '../components/topnav/topnav';
import {FooterComponent} from '../components/footer/footer';

import {DashboardComponent} from '../dashboard/dashboard';
import {CommunicationsComponent} from '../admin/communications/communications';

@Component({
  moduleId: module.id,
  selector: 'main-board',
  templateUrl: 'main.html',
  encapsulation: ViewEncapsulation.None,
  directives: [ROUTER_DIRECTIVES, TopNavComponent, FooterComponent]
})

@Routes([
  { path: '/dashboard', component: DashboardComponent },
  { path: '/communications', component: CommunicationsComponent },
])

export class MainComponent {

}
