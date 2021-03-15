import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { MatCardModule } from '@angular/material/card';

export const storeFeatureGameDetailRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: GameDetailComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(storeFeatureGameDetailRoutes), MatCardModule],
  declarations: [GameDetailComponent],
})
export class StoreFeatureGameDetailModule {}
