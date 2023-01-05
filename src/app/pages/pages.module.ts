import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { Content1Component } from './content1/content1.component';
import { Content2Component } from './content2/content2.component';
import { PagesComponent } from './pages.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    PagesComponent,
    HeaderComponent,
    FooterComponent,
    Content1Component,
    Content2Component
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    PagesComponent,
    FooterComponent,
    HeaderComponent,
    Content1Component,
    Content2Component
  ]
})
export class PagesModule {
  
}
