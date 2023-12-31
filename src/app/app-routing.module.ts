import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IfElseComponent } from './components/if-else/if-else.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { NgforofComponent } from './components/ngforof/ngforof.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: '1', component: IfElseComponent },
  { path: '2', component: DataBindingComponent },
  { path: '3', component: NgforofComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
