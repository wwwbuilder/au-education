import {Component, ViewEncapsulation} from '@angular/core';
import { ROUTER_DIRECTIVES, Routes } from '@angular/router';

import {MainComponent} from './layout/main';
import {LoginComponent} from './login/login';

@Component({
  moduleId: module.id,
  selector: 'ed-admin',
  templateUrl: 'ed-admin.html',
  encapsulation: ViewEncapsulation.None,
  directives: [ROUTER_DIRECTIVES]
})

@Routes([
  { path: '/main', component: MainComponent },
  { path: '/login', component: LoginComponent },
])

export class EdAdminComponent { }
