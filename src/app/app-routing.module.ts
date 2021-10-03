import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LoginScreenComponent} from "./login-screen/login-screen.component";
import {CasterListComponent} from "./caster-list/caster-list.component";
import {CasterComponent} from "./caster/caster.component";

const routes: Routes = [
  {path: 'login', component: LoginScreenComponent},
  {path: 'casterlist', component: CasterListComponent},
  {path: 'caster?id=${id}', component: CasterComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
