/** Angular imports */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
/** Main App Routing */
import { AppRoutes } from './app-routing.module';
/** App Interceptor */
import { Interceptor } from './core/interceptors/interceptor';

/** Reusable modules */
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

/** Main App Components */
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './core/authentication/authentication.component';
import { ModulesComponent } from './modules/modules.component';
import { PromptComponent } from './shared/modal/prompt/prompt.component';

@NgModule({
  declarations: [AppComponent, AuthenticationComponent, ModulesComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    CoreModule,
    SharedModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  entryComponents: [PromptComponent],
})
export class AppModule {}
