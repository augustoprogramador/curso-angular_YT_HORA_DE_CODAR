import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { DiretivasComponent } from './components/diretivas/diretivas.component';
import { RenderizacaoCondicionalComponent } from './components/renderizacao-condicional/renderizacao-condicional.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { EmissorComponent } from './components/emissor/emissor.component';
import { ChangeNumberComponent } from './components/change-number/change-number.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';

@NgModule({
	declarations: [
		AppComponent,
		FirstComponentComponent,
		ParentDataComponent,
		DiretivasComponent,
		RenderizacaoCondicionalComponent,
		EventosComponent,
		EmissorComponent,
		ChangeNumberComponent,
		ListRenderComponent,
		PipesComponent,
		TwoWayBindingComponent,
	],
	imports: [BrowserModule, AppRoutingModule, FormsModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
