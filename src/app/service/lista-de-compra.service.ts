import { Item } from 'src/app/interfaces/iItem';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaDeCompraService {

  // O serviço cria funcionalidades para alterar os itens, adicionar e excluir
  private listaDeCompra!: Item[]

  constructor() {
    // Utiliza o localStorage para salvar os itens da listaDeCompra
   this.listaDeCompra = JSON.parse(localStorage.getItem('item')||'[]')
  }

  getListaDeCompra(){
    return this.listaDeCompra;
  }

  criarItem(nomeDoItem: string) {
    const id = this.listaDeCompra.length + 1;
    const item: Item = {
      id: id,
      nome: nomeDoItem,
      data: new Date().toLocaleDateString('pt-BR'),
      comprado: false
    }
    return item;
  }

  adicionarItemNaLista(nomeDoItem: string) {
    const item = this.criarItem(nomeDoItem)
    this.listaDeCompra.push(item);
//    this.atualizarLocalStorage();
  }

  editarItem(itemAntigo: Item, nomeEditado: string) {

    const itemEditado: Item = {
      id: itemAntigo.id,
      nome: nomeEditado,
      data: itemAntigo.data,
      comprado: itemAntigo.comprado,
    }

    const id = itemAntigo.id;

    this.listaDeCompra.splice(Number(id) - 1, 1, itemEditado)
  //  this.atualizarLocalStorage()

  }

  atualizarLocalStorage(){
    localStorage.setItem("itens", JSON.stringify(this.listaDeCompra))
  }
  
}
