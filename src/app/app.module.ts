import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgxsEffectsModule} from 'ngxs-effects';
import {NgxsModule, NgxsModuleOptions} from '@ngxs/store';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin';
import {NgxsRouterPluginModule, RouterStateSerializer} from '@ngxs/router-plugin';
import {NgxsWebsocketPluginModule} from '@ngxs/websocket-plugin';
import { ApplicationState } from './app.state';
import { AppEffects } from './app.effects';

export const ngxsConfig: NgxsModuleOptions = {
  developmentMode: true,
  selectorOptions: {
      // These Selector Settings are recommended in preparation for NGXS v4
      suppressErrors: false,
      injectContainerState: false
  },
  compatibility: {
      strictContentSecurityPolicy: true
  },
};
export const NGRXStates = [
  ApplicationState
];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // ngxs modules
    NgxsModule.forRoot([...NGRXStates], ngxsConfig),
    NgxsRouterPluginModule.forRoot(),
    NgxsWebsocketPluginModule.forRoot({ // this allows for websocket ngxs syncing
    }),
    NgxsEffectsModule,
    NgxsEffectsModule.forFeature(AppEffects),
    // ngxs dev tools/logger
    NgxsReduxDevtoolsPluginModule.forRoot({
    }),
    NgxsLoggerPluginModule.forRoot({
        disabled: true
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
