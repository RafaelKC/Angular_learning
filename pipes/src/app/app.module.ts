import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from "@angular/common";
import br from '@angular/common/locales/pt';
import { FormsModule } from '@angular/forms';
registerLocaleData(br, 'pt-BR');

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExemploPipesComponent } from './exemplo-pipes/exemplo-pipes.component';
import { CamelCasePipe } from './camel-case.pipe';
import { SettingsService } from './settings.service';
import { FiltroArrayPipe } from './filtro-array.pipe';
import { FiltroArrayImpuroPipe } from './filtro-array-impuro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ExemploPipesComponent,
    CamelCasePipe,
    FiltroArrayPipe,
    FiltroArrayImpuroPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
/*     {
      provide: LOCALE_ID,
      useValue: 'pr-BR'
    } */
    SettingsService,
    {
      provide: LOCALE_ID,
      deps: [SettingsService],
      useFactory: (settingsService: any) => settingsService.getLocale()
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
