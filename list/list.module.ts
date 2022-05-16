import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule, HOOK_NAVIGATOR_NODES } from '@c8y/ngx-components';
import { ListComponent } from './list.component';

/**
 * Angular Routes.
 * Within this array at least path (url) and components are linked.
 */
const routes: Routes = [
  {
    path: 'list',
    component: ListComponent
  }
];

@NgModule({
  declarations: [ListComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  providers: [
    {
      provide: HOOK_NAVIGATOR_NODES,
      useValue: [
        {
          label: 'List',
          icon: 'c8y-device',
          path: '/list',
          priority: 97,
          routerLinkExact: false
        }
      ],
      multi: true
    }
  ]
})
export class ListModule {}
