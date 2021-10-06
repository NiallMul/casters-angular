import { Component, OnInit } from '@angular/core';
import {CasterListService} from "../caster-list.service";
import {CasterSelection} from "../CasterSelection";
import {LogServiceService} from "../log-service.service";


@Component({
  selector: 'app-caster-list',
  templateUrl: './caster-list.component.html',
  styleUrls: ['./caster-list.component.css']
})
export class CasterListComponent implements OnInit {
  casterSelection: CasterSelection = {casterList: []};

  constructor(private casterListService: CasterListService) { }

  ngOnInit(): void {
    this.getCasterList();
  }

  getCasterList(): void{
    this.casterListService.getCasterList().then(casterSelection => this.casterSelection = casterSelection);
  }
}
