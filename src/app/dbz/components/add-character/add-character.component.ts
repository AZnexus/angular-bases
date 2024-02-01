import { Component, EventEmitter, Output } from "@angular/core";
import { Character } from "../../interfaces/character.interface";

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  @Output() // Per poder externalitzar el mètode
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  };

  emitCharacter(): void {

    // debugger;

    // console.log(this.character);
    if (this.character.name.length === 0) return; // Si ve sense nom, no s'accepta
    this.onNewCharacter.emit(this.character);

    this.character = {name: '', power: 0};
  }
}
