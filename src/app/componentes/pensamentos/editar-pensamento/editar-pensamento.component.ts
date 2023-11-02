import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento/pensamento';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrls: ['./editar-pensamento.component.css']
})
export class EditarPensamentoComponent implements OnInit {
   formulario!:FormGroup
  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id) this.service.buscarPorId(parseInt(id!)).subscribe(pensamento => {
      this.formulario = this.formBuilder.group({
        conteudo: [pensamento.conteudo, Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\S)*\S(.|\S)*/)
        ])],
        autoria: [pensamento.autoria, Validators.compose([
          Validators.required,
          Validators.minLength(3)
        ],)],
        modelo: [pensamento.modelo],
        id: pensamento.id,
        favorito: [pensamento.favorito]
    })})
  }

  editarPensamento(){
    if(this.formulario.valid){
      this.service.editar(this.formulario.value).subscribe(() => {
        this.router.navigate(['/listarPensamento']);
      })
    }
  }

  cancelar(){
    this.router.navigate(['/listarPensamento']);
  }

  habilitarBotao(){
    if(this.formulario.valid){
      return 'botao';
    }else{
      return 'botao__desabilitado'
    }
  }

}
