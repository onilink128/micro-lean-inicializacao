import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloWorldComponent } from './hello-world/hello-world.component';

const routes: Routes = [
  {
    path: '',
    component: HelloWorldComponent,
  },
];

@NgModule({
  declarations: [HelloWorldComponent],
  imports: [RouterModule.forChild(routes)],
})
export class InicializacaoRouteModule {}
