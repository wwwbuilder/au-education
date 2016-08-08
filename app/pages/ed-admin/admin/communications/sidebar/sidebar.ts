import {Component} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector : 'communication-sidebar',
  templateUrl : 'sidebar.html',
  directives: [ROUTER_DIRECTIVES]
})

export class SidebarComponent {}
