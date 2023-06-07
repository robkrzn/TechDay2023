import { BrowserModule } from '@angular/platform-browser'
import { NgModule, isDevMode } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

// views
import { AboutComponent } from './views/about/about.component'
import { HomeComponent } from './views/home/home.component'
import { TunesComponent } from './views/tunes/tunes.component'

// components
import { TheNavigationComponent } from './components/the-navigation/the-navigation.component'
import { TunesSearchFormComponent } from './components/tunes/tunes-search-form/tunes-search-form.component'
import { TunesListComponent } from './components/tunes/tunes-list/tunes-list.component'
import { TunesSongComponent } from './components/tunes/tunes-song/tunes-song.component'
import { SongifyPipe } from './pipes/songify.pipe'
import { ShortenPipe } from './pipes/shorten.pipe';
import { ServiceWorkerModule } from '@angular/service-worker'

@NgModule({
	declarations: [
		AppComponent,
		AboutComponent,
		HomeComponent,
		TunesComponent,
		TheNavigationComponent,
		TunesSearchFormComponent,
		TunesListComponent,
		TunesSongComponent,
		SongifyPipe,
		ShortenPipe
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		BrowserAnimationsModule,
  ServiceWorkerModule.register('ngsw-worker.js', {
    enabled: !isDevMode(),
    // Register the ServiceWorker as soon as the application is stable
    // or after 30 seconds (whichever comes first).
    registrationStrategy: 'registerWhenStable:30000'
  })
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
