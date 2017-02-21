import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MessageContainerComponent} from "./message-container/message-container.component";
import {AboutComponent} from "./about/about.component";
import {NotFoundComponent} from "./not-found/not-found.component";

const routes: Routes = [
  { path: '',  component: MessageContainerComponent },
  { path: 'about',  component: AboutComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
