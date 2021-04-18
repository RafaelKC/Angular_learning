import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiretivaNgifComponent } from './diretiva-ngif/diretiva-ngif.component';
import { TesteComponent } from './teste/teste.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { FormsModule } from '@angular/forms';
import { OperadorElvisComponent } from './operador-elvis/operador-elvis.component';
import { ExemploNgContentComponent } from './exemplo-ng-content/exemplo-ng-content.component';
import { FundoAmareloDirective } from './shared/fundo-amarelo.directive';
import { DiretivasCustumizadasComponent } from './diretivas-custumizadas/diretivas-custumizadas.component';
import { HighlightComMouseDirective } from './shared/highlight-com-mause.directive';
import { HightlightDirective } from './shared/hightlight.directive';
import { NgElseDirective } from './shared/ng-else.directive';

@NgModule({
  declarations: [
    AppComponent,
    DiretivaNgifComponent,
    TesteComponent,
    NgSwitchComponent,
    NgForComponent,
    NgClassComponent,
    NgStyleComponent,
    OperadorElvisComponent,
    ExemploNgContentComponent,
    FundoAmareloDirective,
    DiretivasCustumizadasComponent,
    HighlightComMouseDirective,
    HightlightDirective,
    NgElseDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
