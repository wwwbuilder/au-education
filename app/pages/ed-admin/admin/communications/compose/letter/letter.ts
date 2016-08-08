import {Component} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
	moduleId: module.id,
	selector : 'compose-letter',
  templateUrl : 'letter.html',
	directives: [ROUTER_DIRECTIVES]
})

export class LetterComponent {}
