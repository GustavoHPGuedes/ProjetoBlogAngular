import { Component, Input } from '@angular/core';
import {RouterModule} from '@angular/router';
import { MenuComponent } from "../../components/menu/menu.component";
import { NoticiaComponent } from "../../components/noticia/noticia.component";

@Component({
  selector: 'page-noticia',
  standalone: true,
  imports: [MenuComponent, NoticiaComponent, RouterModule],
  templateUrl: './noticia.page.html',
  styleUrl: './noticia.page.css'
})
export class NoticiaPage {

  @Input() titulo:string = ""
  @Input() descricao:string = ""
  @Input() imgLink:string = ""
  @Input() idNoticia:number = 0

}
