import {Component} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
	moduleId: module.id,
	selector : 'setup-template',
  templateUrl : 'template.html',
  directives: [ROUTER_DIRECTIVES]
})

export class TemplateComponent {}
