import {Component} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
	moduleId: module.id,
	selector : 'compose-index',
  templateUrl : 'index.html',
	directives: [ROUTER_DIRECTIVES]
})

export class IndexComponent {}
