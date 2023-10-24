import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {
  listaPensamentos = [
    {
        conteudo: 'I Love Angular muteka',
        autoria: 'Pedro',
        modelo: 'modelo3'
    },
    {
      conteudo: 'I Love muteka ddkdkkdddddddddd kkfkfkkfkff kdkdkdkdkkdkdk kkdkdkdkdkdkkd kkdkdkdkdkkdkdkdk kdkdkdkdkkdkdkdkdk k kdkdkdkdkdkdk kkvdkdkdkdkdkdk kdkdkkdkddkdkkdkdkd kdkdkdkdkkdkdkddk kdkdkdkdkkdkdk kdkdkdkdkdkdkkdkdkdk kdkdkdksksisjksjskjjkjkkj jk jkkjdjkdjkdjkkkkkkkkkkkkkkkk  jkjkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk kjkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk jkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk jkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkj fjfjfjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj jvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv djjjjjjjjjjjjjjjjjjjjj',
      autoria: 'Pedro muteka',
      modelo: 'modelo2'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
