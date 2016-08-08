import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {EdInputMaterialDirective, EdDatepickerDirective} from '../../../../../../project/directives/index';

@Component({
  moduleId: module.id,
	selector : 'compose-email',
	templateUrl : 'email.html',
	directives: [ROUTER_DIRECTIVES, EdInputMaterialDirective, EdDatepickerDirective]
})

export class EmailComponent {}
