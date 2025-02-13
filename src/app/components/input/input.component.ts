import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Item } from 'src/app/interfaces/iItem';
import { ListaDeCompraService } from 'src/app/service/lista-de-compra.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, OnChanges {

  @Input() itemParaEditar!:Item

  editando = false;
  textoBtn = 'Salvar item';

  valorItem!: string;


  constructor(private service: ListaDeCompraService) { }

  adicionarItem() {
    this.service.adicionarItemNaLista(this.valorItem);
    this.limparCampo()
  }

  editarItem() {
    this.service.editarItem(this.itemParaEditar, this.valorItem)
    this.limparCampo()
    this.editando = false;
    this.textoBtn = "Salvar item";
  }

  limparCampo() {
    this.valorItem = ''
  }


  ngOnInit(): void { }


  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['itemParaEditar'].firstChange) {
      this.editando = true;
      this.textoBtn = "Editar item";
      this.valorItem = this.itemParaEditar?.nome;
    }
  }
}
