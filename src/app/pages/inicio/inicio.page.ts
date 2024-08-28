import { Component } from '@angular/core';
import { MenuComponent } from "../../components/menu/menu.component";
import { CardComponent } from "../../components/card/card.component";
import {RouterModule} from '@angular/router';

@Component({
  selector: 'page-inicio',
  standalone: true,
  imports: [MenuComponent, CardComponent, RouterModule],
  templateUrl: './inicio.page.html',
  styleUrl: './inicio.page.css'
})
export class InicioPage {

}
