import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './components/home/home.component';
import { BarRoutingModule } from './bar-routing.module';
import { BarDetailComponent } from './components/bar-detail/bar-detail.component';
import { BarListComponent } from './components/bar-list/bar-list.component';
import { BarEventComponent } from './components/bar-event/bar-event.component';
import { BarMenuComponent } from './components/bar-menu/bar-menu.component';
import { BarReviewsComponent } from './components/bar-reviews/bar-reviews.component';
import { BarOverviewComponent } from './components/bar-overview/bar-overview.component';

import { StoreModule, Store } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducer } from './app.reducer';
import { BarActions} from './actions/bar.actions';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BarEffects } from './effects/bar.effects';

import { BackendService } from './shared/services/backend.service';
import { BeToFeMapperService } from './shared/services/be-to-fe-mapper.service';
import { InfiniteScrollModule } from "angular2-infinite-scroll";


@NgModule({
  declarations: [
    HomeComponent,
    BarDetailComponent,
    BarListComponent,
    BarEventComponent,
    BarMenuComponent,
    BarReviewsComponent,
    BarOverviewComponent
  ],
  imports: [
    HttpModule,
    CommonModule,
    BarRoutingModule,
    InfiniteScrollModule,
    StoreModule.provideStore(reducer),
    EffectsModule.run(BarEffects),
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 5
    })
  ],
  providers: [BarActions, BackendService, BeToFeMapperService]
})
export class BarModule { }
