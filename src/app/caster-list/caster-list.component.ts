import {Component, OnInit} from '@angular/core';
import {CasterListService} from "../caster-list.service";
import {CasterSelection} from "../CasterSelection";


@Component({
  selector: 'app-caster-list',
  templateUrl: './caster-list.component.html',
  styleUrls: ['./caster-list.component.css']
})
export class CasterListComponent implements OnInit {
  casterSelection: CasterSelection = {casterList: []};
  casterName: String = "casterName";
  powerName: String = "powerName";

  constructor(private casterListService: CasterListService) {
  }

  ngOnInit(): void {
    this.getCasterList();
  }

  getCasterList(): void {
    this.casterListService.getCasterList().then(casterSelection => this.casterSelection = casterSelection);
  }

  clearToggles(): void {
    let casterlistElement = document.getElementById("armieslist")
    //debugger;
    // @ts-ignore
    for (let caster of casterlistElement.children) {
      for (let powers of caster.children) {
        let casterName = powers.children[0].children[0].childNodes[0] ? powers.children[0].children[0].childNodes[0].data.trim() : null;
        if (casterName) {
          let powerName = powers.childNodes[0].children[1].childNodes[0].innerText;
          console.log(`powers loop: ${casterName}-name-toggle-${powerName}`);
        }
      }
    }
  }

}
