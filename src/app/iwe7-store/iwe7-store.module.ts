import { Iwe7AppEffects } from '../effects/iwe7-app.effects';
import { EffectsModule } from '@ngrx/effects';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Iwe7AppPageEffects } from '../effects/iwe7-app-page.effects';
import { Iwe7RouterEffects } from '../effects/iwe7-router.effects';
import { Iwe7ComponentsEffects } from '../effects/iwe7-components.effects';
import { Iwe7AppContentEffects } from '../effects/iwe7-app-content.effects';
@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([
      Iwe7AppEffects, Iwe7RouterEffects,
      Iwe7ComponentsEffects, Iwe7AppPageEffects,
      Iwe7AppContentEffects,
    ]),
  ],
  exports: [EffectsModule],
  providers: []
})
export class Iwe7StoreModule { }
