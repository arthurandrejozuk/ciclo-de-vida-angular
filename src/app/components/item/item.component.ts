import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/interfaces/iItem';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnChanges {


  faPen = faPen;
  faTrash = faTrash;

  // emite uma variavel pra item no componente pai
  @Input()
  item!: Item

  // emite uma função para o item, permitindo pegar a função do componente pai 
  @Output()
  emitindoItemParaEditar = new EventEmitter();

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges')
  }

  ngOnInit(): void {
    console.log('OnInit')
  }

  editaValorCompra() {
    // muda o valor do atributo de compra
    console.log('troca')
    if(this.item.comprado == true){
      this.item.comprado = false;
    } else {
      this.item.comprado = true;
    }
  }

  editarItem() {
    this.emitindoItemParaEditar.emit(this.item);
  }

}
