import {Component, ViewEncapsulation, ViewContainerRef} from '@angular/core';
import { ROUTER_DIRECTIVES, Routes } from '@angular/router';

// import {LoginComponent} from '../../pages/login/components/login';
import {EdAdminComponent} from '../../pages/ed-admin/ed-admin';
import {EdSponsorComponent} from '../../pages/ed-sponsor/ed-sponsor';
import {GatewayComponent} from '../../pages/portal-gateway/components/gateway';

@Component({
	moduleId: module.id,
    selector: 'sd-app',
    templateUrl: 'base.html',
    encapsulation: ViewEncapsulation.None,
    directives: [ROUTER_DIRECTIVES]
})

@Routes([
    { path: '/', component: GatewayComponent },
    { path: 'admin', component: EdAdminComponent },
    { path: 'sponsor', component: EdSponsorComponent }
])

export class AppComponent {
	viewContainerRef: any = null;
	public constructor(viewContainerRef:ViewContainerRef) {
	    // You need this small hack in order to catch application root view container ref
	    this.viewContainerRef = viewContainerRef;
	}
}
