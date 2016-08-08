import {Component, ViewEncapsulation} from '@angular/core';
import { ROUTER_DIRECTIVES, Routes } from '@angular/router';

import {LoginComponent} from './login/login';

@Component({
  moduleId: module.id,
  selector: 'ed-sponsor',
  templateUrl: 'ed-sponsor.html',
  encapsulation: ViewEncapsulation.None,
  directives: [ROUTER_DIRECTIVES]
})

@Routes([
  { path: '/login', component: LoginComponent }
])

export class EdSponsorComponent { }
