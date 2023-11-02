import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento/pensamento';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {
  listaPensamentos: Pensamento[] = []
  listaFavoritos: Pensamento[] = []
  haMaisPensamentos: boolean = true;
  paginaAtual:number = 1
  filtro: string = ''
  favoritos: boolean = false
  titulo: string = 'Meu Mural'
  constructor(private service: PensamentoService, private router: Router) { }
  ngOnInit(): void {
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos).subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos
    })
  }
  carregarMaisPensamentos(){
    this.service.listar(++this.paginaAtual, this.filtro, this.favoritos)
    .subscribe(listaPensamentos => {
      this.listaPensamentos.push(...listaPensamentos)
      if(!listaPensamentos.length){
        this.haMaisPensamentos = false
      }
    })
  }

  pesquisarPensamentos(){
    this.haMaisPensamentos = true
    this.paginaAtual = 1
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos)
    .subscribe(listaPensamentos => {
      console.log(listaPensamentos);

      this.listaPensamentos = listaPensamentos
    })
  }

  listarFavoritos(){
    this.titulo = 'Meus Favoritos'
    this.haMaisPensamentos = true
    this.paginaAtual = 1
    this.favoritos = true
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos)
    .subscribe(listaPensamentos => {
      this.listaPensamentos = listaPensamentos
      this.listaFavoritos = listaPensamentos
    })
  }

  recarregarComponente(){
    this.titulo = 'Meu Mural'
    this.favoritos = false;
    this.paginaAtual = 1;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false
    this.router.onSameUrlNavigation = 'reload'
    this.router.navigate([this.router.url])
  }
}
