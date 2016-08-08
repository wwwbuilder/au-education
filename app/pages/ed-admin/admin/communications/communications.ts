import {Component} from '@angular/core';
import { ROUTER_DIRECTIVES, Routes } from '@angular/router';

import {IndexComponent} from './index/index';
import {EmailComponent} from './compose/email/email';
import {LabelComponent} from './compose/label/label';
import {LetterComponent} from './compose/letter/letter';
import {SmsComponent} from './compose/sms/sms';
import {ItemsComponent} from './items/items';
import {CommunicationCcComponent} from './setup/communicationcc/communicationcc';
import {ConfigurationComponent} from './setup/configuration/configuration';
import {LabelsComponent} from './setup/labels/labels';
import {TemplateComponent} from './setup/template/template';
import {SidebarComponent} from './sidebar/sidebar';

@Component({
  moduleId: module.id,
  selector : 'admin-communications',
  templateUrl : 'communications.html',
  directives: [ROUTER_DIRECTIVES, SidebarComponent]
})

@Routes([
  { path: '/index', component: IndexComponent },
  { path: '/compose/email', component: EmailComponent },
  { path: '/compose/label', component: LabelComponent },
  { path: '/compose/letter', component: LetterComponent },
  { path: '/compose/sms', component: SmsComponent },
  { path: '/items', component: ItemsComponent },
  { path: '/setup/communication-cc', component: CommunicationCcComponent },
  { path: '/setup/configuration', component: ConfigurationComponent },
  { path: '/setup/labels', component: LabelsComponent },
  { path: '/setup/template', component: TemplateComponent },
])

export class CommunicationsComponent {}
