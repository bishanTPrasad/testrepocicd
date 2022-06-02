import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule, HOOK_NAVIGATOR_NODES, NavigatorNode } from '@c8y/ngx-components';
import { ContextDashboardModule } from '@c8y/ngx-components/context-dashboard';
import { CustomDashboardComponent } from './custom-dashboard.component';
import { WidgetDashboardComponent } from './widget-dashboard.component';
import { ContextDashboardComponent } from './context-dashboard.component';

/**
 * Angular Routes.
 * Within this array at least path (url) and components are linked.
 */
const routes: Routes = [
  {
    path: 'dashboards/custom',
    component: CustomDashboardComponent
  },
  {
    path: 'dashboards/widget',
    component: WidgetDashboardComponent
  },
  {
    path: 'dashboards/context',
    component: ContextDashboardComponent
  }
];

const dashboards = new NavigatorNode({
  label: 'Dashboards',
  icon: 'th',
  priority: 95
});

dashboards.add(
  new NavigatorNode({
    label: 'Custom dashboard',
    path: '/dashboards/custom',
    icon: 'th-large',
    priority: 3
  })
);
dashboards.add(
  new NavigatorNode({
    label: 'Context dashboard',
    path: '/dashboards/context',
    icon: 'list-alt',
    priority: 2
  })
);
dashboards.add(
  new NavigatorNode({
    label: 'Widget dashboard',
    path: '/dashboards/widget',
    icon: 'th-list',
    priority: 1
  })
);

@NgModule({
  declarations: [CustomDashboardComponent, WidgetDashboardComponent, ContextDashboardComponent],
  imports: [
    ContextDashboardModule.config(),
    CommonModule,
    RouterModule.forChild(routes),
    CoreModule,
    ContextDashboardModule
  ],
  providers: [{ provide: HOOK_NAVIGATOR_NODES, useValue: { get: () => dashboards }, multi: true }]
})
export class DashboardModule {}
