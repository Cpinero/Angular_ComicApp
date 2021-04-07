import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

// Importamos Compenentes a navegar

import {HomeComponent} from "./components/home/home.component";
import {AboutComponent} from "./components/about/about.component";
import {HeroesComponent} from "./components/heroes/heroes.component";
import {HeroeComponent} from "./components/heroe/heroe.component";
import {BuscadorComponent} from "./components/buscador/buscador.component";


const appRoutes: Routes = [
    {path: "", component: HomeComponent},
    {path: "home", component: HomeComponent},
    {path: "about", component: AboutComponent},
    {path: "heroes", component: HeroesComponent},
    {path: "heroe/:id", component: HeroeComponent},
    {path: "buscar/:termino", component: BuscadorComponent},
    {path: "**", component: HomeComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
