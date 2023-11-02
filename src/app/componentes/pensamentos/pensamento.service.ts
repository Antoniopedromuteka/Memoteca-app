import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http"
import { Pensamento } from './pensamento/pensamento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {
  private readonly API = "http://localhost:3000/pensamentos"
  constructor(private http:HttpClient) { }
  listar(pagina: number, filtro: string, favoritos: boolean): Observable<Pensamento[]>{
    const itensPorPagina = 6
    let params = new HttpParams()
    .set("_page", pagina)
    .set("_limit", itensPorPagina)
    .set("q", filtro)
    if(filtro.trim().length > 1) {
      params.set("q", filtro)
    }
    if(favoritos){
      params = params.set("favorito", true)
    }
    // GET /posts?_page=7&_limit=20
    // return this.http.get<Pensamento[]>(`${this.API}?_page=${pagina}&_limit=${intesPorPagina}`)
    return this.http.get<Pensamento[]>(this.API, { params })
  }

  // listarPensamentosFavoritos(pagina: number, filtro: string ): Observable<Pensamento[]> {
  //   const itensPorPagina = 6
  //   let params = new HttpParams()
  //   .set("_page", pagina)
  //   .set("_limit", itensPorPagina)
  //   .set("favorito", true)
  //   if(filtro.trim().length > 1) {
  //     params.set("favorito", filtro)
  //   }
  //   // GET /posts?_page=7&_limit=20
  //   // return this.http.get<Pensamento[]>(`${this.API}?_page=${pagina}&_limit=${intesPorPagina}`)
  //   return this.http.get<Pensamento[]>(this.API, { params })
  // }


  criar(pensamento: Pensamento): Observable<Pensamento>{
    return this.http.post<Pensamento>(this.API, pensamento)
  }

  editar(pensamento: Pensamento): Observable<Pensamento>{
    return this.http.put<Pensamento>(`${this.API}/${pensamento.id}`, pensamento)
  }

  mudarFavorito(pensamento: Pensamento): Observable<Pensamento>{
    pensamento.favorito = !pensamento.favorito
    return this.editar(pensamento)
  }

  excluir(id: number): Observable<Pensamento>{
    return this.http.delete<Pensamento>(`${this.API}/${id}`)
  }

  buscarPorId(id: number): Observable<Pensamento>{
    return this.http.get<Pensamento>(`${this.API}/${id}`)
  }

}
