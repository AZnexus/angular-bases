import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Character } from "../../interfaces/character.interface";

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 5000
  }]

  @Output()
  public onDelete: EventEmitter<number> = new EventEmitter();


  onDeleteCharacter(index: number): void {
    //TODO: Emitir el ID del character
    console.log(index);
    this.onDelete.emit(index);
  }
}
