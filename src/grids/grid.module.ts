import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from '@c8y/ngx-components';
import { DataGridExampleComponent } from './data-grid-example.component';
import { CellRendererExampleComponent } from './cell-renderer-example.component';
import { HOOK_NAVIGATOR_NODES } from '@c8y/ngx-components';

const routes: Routes = [
  {
    path: 'grids/data-grid',
    component: DataGridExampleComponent
  }
];

@NgModule({
  declarations: [DataGridExampleComponent, CellRendererExampleComponent],
  imports: [RouterModule.forChild(routes), CoreModule],
  entryComponents: [CellRendererExampleComponent],
  providers: [
    {
      provide: HOOK_NAVIGATOR_NODES,
      useValue: {
        label: 'Grid',
        icon: 'table',
        path: 'grids/data-grid'
      },
      multi: true
    }
  ]
})
export class GridModule {}
