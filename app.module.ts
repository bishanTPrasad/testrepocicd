import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule as ngRouterModule } from '@angular/router';
import { BootstrapComponent, CoreModule, RouterModule, PluginsModule } from '@c8y/ngx-components';
import { BulkOperationSchedulerModule } from '@c8y/ngx-components/operations/bulk-operation-scheduler';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { DashboardModule } from './src/dashboard';
import { DynamicFormsTutorialModule } from './src/dynamic-forms';
import { GridModule } from './src/grids';
import { HelloModule } from './src/hello';
import { HooksModule } from './src/hooks';
import { LazyLoadedModule } from './src/lazy';
import { ListModule } from './src/list';
import { ProviderConfigurationTutorialModule } from './src/provider-configuration';
import { StepperModule } from './src/stepper';
import { TabsModule } from './src/tabs';
import { TranslationsModule } from './src/translations';
import { DashboardWidgetDemoModule } from './src/widget';

@NgModule({
  declarations: [],
  imports: [
    BrowserAnimationsModule,
    ngRouterModule.forRoot([], { enableTracing: false, useHash: true }),
    RouterModule.forRoot(),
    // Import the CoreModule to add c8y functionality
    CoreModule.forRoot(),

    // The following modules show examples of how to
    HelloModule,
    TabsModule,
    DashboardWidgetDemoModule,
    DashboardModule,
    HooksModule,
    ListModule,
    StepperModule,
    GridModule,
    LazyLoadedModule,
    TranslationsModule,
    BulkOperationSchedulerModule,
    DynamicFormsTutorialModule,
    ProviderConfigurationTutorialModule,
    PluginsModule.forRoot()
  ],

  providers: [BsModalRef],

  /**
   * Bootstrap your application with the BootstrapComponent which will use the `<c8y-bootstrap>`
   * component to initialize the root application. Alternatively you can bootstrap
   * a component of your choice and include that tag into its template or only reuse the given components
   */
  bootstrap: [BootstrapComponent]
})
export class AppModule {}
