import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { MaiusculaPipe } from './pipes/maiuscula.pipe';
import { FooterComponent } from './layouts/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BorderColorDirective } from './directives/border-color.directive'; // Para poder usar font-awesome
import { HeaderComponent } from './layouts/header/header.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HighlightDirective,
    MaiusculaPipe,
    BorderColorDirective
  ],
  exports: [
    HighlightDirective,
    MaiusculaPipe,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule
  ]
})
export class SharedModule { }
