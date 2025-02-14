import { ListaDeCompraService } from './service/lista-de-compra.service';
import { Component, DoCheck, OnInit } from '@angular/core';
import { Item } from './interfaces/iItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {

  title = 'app-lista-de-compras';

  listaCompras: Array<Item> = []
  itemParaSerEditado! : Item

  constructor(private service: ListaDeCompraService) { }

  // DoCheck serve para fazer algo quando escutar uma mudança
  ngDoCheck(): void {
    console.log("DoCheck foi chamado")
    // Atualiza o localStorage, sem a necessidade de colocar essa função em todos as funcionalidades do serviço
    this.service.atualizarLocalStorage()
  }

  // Pega a lista do serviço já carrega depois do componente inicializar
  ngOnInit(): void {
    this.listaCompras = this.service.getListaDeCompra();
  }

  // Edita item para ser editado
  editarItem(item: Item) {
    this.itemParaSerEditado = item;
  }

  deletarItem(id: number) {
    const item = this.listaCompras.findIndex((item) => item.id == id)
    this.listaCompras.splice(item, 1);
  }
  limparLista() {
    this.listaCompras = []
  }


}
