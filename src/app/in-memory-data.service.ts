import {Injectable} from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Caster} from "./Caster";
import {Power} from "./Power";
import {CasterList} from "./CasterList";
import {CasterSelection} from "./CasterSelection";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const powers: Power[] = [
      {name: "power1", value: 4},
      {name: "power2", value: 7},
      {name: "power3", value: 9},
    ]
    const casters: Caster[] = [
      {id: 1, name: "caster", powers: powers},
      {id: 2, name: "caster1", powers: powers}
    ]
    const casterList: CasterList[] = [
      {name: "army1", casters: casters}
    ]
    const casterSelection: CasterSelection = {
      casterList: casterList
    }

    return {casterSelection};
  }
}
