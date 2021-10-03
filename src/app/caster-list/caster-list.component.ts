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

  constructor(private casterListService: CasterListService, private log: LogServiceService) { }

  ngOnInit(): void {
    this.getCasterList();
  }

  getCasterList(): void{
    this.log.log("inside get caster list method, value of casters is: " + this.casterSelection.casterList.length);
    this.casterListService.getCasterList()
      .subscribe(casterSelection => this.casterSelection = casterSelection);
  }
}
