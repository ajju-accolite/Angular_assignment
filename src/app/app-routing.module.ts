import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserInfoComponent } from './Components/userInfo/userInfo.component';
import { HomeComponent } from './Components/home/home.component';
const routes: Routes = [
  { path: 'userInfo/:id', component: UserInfoComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
