import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-botao-carregagar-mais',
  templateUrl: './botao-carregagar-mais.component.html',
  styleUrls: ['./botao-carregagar-mais.component.css']
})
export class BotaoCarregagarMaisComponent implements OnInit {

  @Input() haMaisPensamentos: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

}
