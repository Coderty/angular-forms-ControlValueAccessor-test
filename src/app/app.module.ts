import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmailComponent } from './email/email.component';

@NgModule({
   declarations: [
      AppComponent,
      EmailComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      ReactiveFormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule {}
