import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TestmeComponent} from './testme/testme.component';


const routes: Routes = [
  {path: 'check/user-management/auth', component: TestmeComponent}/*,
  {
    path: 'features-modules',
    loadChildren: () => import('app/features-modules/features-modules.module').then(m => m.FeaturesModulesModule)
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
