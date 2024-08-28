import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, RouterModule} from '@angular/router';
import { Noticia } from '../../data/noticia.data';

@Component({
  selector: 'app-noticia',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './noticia.component.html',
  styleUrl: './noticia.component.css'
})
export class NoticiaComponent implements OnInit {

  ID: string | null = "";
  titulo:string = ""
  descricao:string = ""
  imgLink:string = ""
  idNoticia:number = 0

  constructor(
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.route.paramMap.subscribe( value => 
      this.ID = value.get("id")
    )
    this.getDadosNoticia(this.ID)
  }

  getDadosNoticia(id: string | null): void {
    const result = Noticia.filter(n => n.id.toString() == id)[0]
    this.titulo = result.titulo
    this.descricao = result.descricao
    this.imgLink = result.imgLink
  }

}
