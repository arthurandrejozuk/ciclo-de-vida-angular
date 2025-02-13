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

  @Input()
  item!: Item

  @Output()
  emitindoItemParaEditar = new EventEmitter();

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges')
  }

  ngOnInit(): void {
    console.log('OnInit')
  }

  editarItem() {
    this.emitindoItemParaEditar.emit(this.item);
  }

}
