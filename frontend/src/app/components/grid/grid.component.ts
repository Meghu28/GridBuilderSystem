import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgStyle } from '@angular/common';
import { GridService } from '../../services/grid.services';
import { RowData } from '../../models/grid.model';
import { ColumnConfig } from '../../models/grid.model';

@Component({
  selector: 'app-grid',
  imports: [ CommonModule, NgStyle ],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css'
})
export class GridComponent implements OnInit {

  rowsList: RowData[] = [];
  configList: ColumnConfig[] = [];

  constructor(private gridService: GridService) {}

  async ngOnInit(): Promise<void> {
    this.rowsList = await this.gridService.getRowData();
    this.configList = await this.gridService.getConfigs();
  }

  getColumnStyle(column: string, value: any): { [style: string]: string } {
    const config = this.configList.find(c => c.columnName === column);

    if (!config) return {};

    if (config.style === 'heatmap' && typeof value === 'number') {
      const clr = Math.max(255, value);
      //return {'background-color' : `rgba(${red}, 0, 0, 0.5)`};
      if(value <= 15){
        return {'background-color' : `rgba(0, 0, ${clr}, 0.5)`};
      }if(value > 15 && value <= 35){
        return {'background-color' : `rgba(0, ${clr}, 0, 0.5)`};
      }if(value > 35){
        return {'background-color' : `rgba(${clr}, 0, 0, 0.5)`};
      }
    }

    return {};
  }

  getRowStyle(timestamp: string): { [style: string]: string } {
    const inputDate = new Date(timestamp);
    const now = new Date();

    inputDate.setHours(0, 0, 0, 0);
    now.setHours(0, 0, 0, 0);

    if(inputDate.getTime() === now.getTime()){
      return {'font-weight' : 'bold'};
    }
    if(inputDate < now){
      return {'color' : 'gray'};
    }
    if(inputDate > now){
      return {'font-style' : 'italic'};
    }
    return {};
  }

  getMergedStyle(column: string, value: any, timestamp: string): { [style: string]: string } {
    return {
      ...this.getColumnStyle(column, value),
      ...this.getRowStyle(timestamp)
    };
  }  

}
