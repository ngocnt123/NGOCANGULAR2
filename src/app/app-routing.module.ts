import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IfElseComponent } from './components/if-else/if-else.component';
import { HomepageComponent } from './components/homepage/homepage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: '1', component: IfElseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
