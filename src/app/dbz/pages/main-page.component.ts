import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  public characters: Character[] = [{
    name: 'Krillin',
    power: 1000
  }, {
    name: 'Goku',
    power: 9500
  }, {
    name: 'Vegeta',
    power: 7000
  }];

  onNewCharacter(character: Character): void {
    this.characters.push(character); // Afegeix element al final de l'array
  }

  onDeleteCharacter(index: number) {
    this.characters.splice(index, 1); // Elimina 1 element (nomes el de l'index que indica. Sino esborraria tot a partir d'aquell index)
  }
}
