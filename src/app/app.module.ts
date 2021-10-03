import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {LoginScreenComponent} from './login-screen/login-screen.component';
import {ReactiveFormsModule} from "@angular/forms";
import {CasterListComponent} from './caster-list/caster-list.component';
import {AppRoutingModule} from './app-routing.module';
import {CasterComponent} from './caster/caster.component';
import {HttpClientModule} from "@angular/common/http";
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    CasterListComponent,
    CasterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatSlideToggleModule,
    MatExpansionModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
