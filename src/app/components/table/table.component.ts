import { Component, ViewChild } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  standalone: false,
})
export class TableComponent {
  themeClr: string = '';
  tableSm: any = [];
  tableMd: any = [];
  tableLg: any = [];
  tableMini: any = [];
  originalTableLg: any = [];
  getInBuildClr: string = 'blue';
  sortStatus: string = 'No sort';

  constructor(
    private service: SharedService,
    public themeService: ThemeService
  ) {
    this.tableSm = this.service.tableSm;
    this.tableMd = this.service.tableMd;
    this.tableLg = this.service.tableLg;
    this.originalTableLg = [...this.tableLg];
    this.tableMini = this.service.tableMini;
  }

  ngOnInit(): void {}

  inBuildClrs(param: string) {
    this.getInBuildClr = param;
  }

  onSortChanged(sortedData: any[]) {
    this.tableLg = sortedData;
  }

  clearSort() {
    // if (this.tableDirective) {
    //   this.tableDirective.clearSort(this.originalTableLg);
    // }
  }
}
