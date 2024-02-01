import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
console.log('Generated ID: ' + uuid())
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root' // Això fa que s'injecti com a provider en el app.module.ts basic (i ens ho estalviem)
})
export class DbzService {

  public characters: Character[] = [{

    id: uuid(),
    name: 'Krillin',
    power: 1000
  }, {
    id: uuid(),
    name: 'Goku',
    power: 9500
  }, {
    id: uuid(),
    name: 'Vegeta',
    power: 7000
  }];

  addCharacter(character: Character): void {

    const newCharacter: Character = { ...character, id: uuid()} // Aquest ...character es fa servir per agafar totes les propietats de l'objecte i, en aquest cas, afegir-li l'id

    this.characters.push(newCharacter); // Afegeix element al final de l'array
  }

  // onDeleteCharacter(index: number) {
  //   this.characters.splice(index, 1); // Elimina 1 element (nomes el de l'index que indica. Sino esborraria tot a partir d'aquell index)
  // }

  deleteCharacterById(id: string) {
    this.characters = this.characters.filter(character => character.id !== id); // Això retorna tots els que tinguin l'id.
  }

}
