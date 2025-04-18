import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { RowData } from "../models/grid.model";
import { ColumnConfig } from "../models/grid.model";
import { firstValueFrom } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
export class GridService {

    private baseURL = 'http://localhost:8080/grid';
    private rowData = 'rowData';
    private configData = 'configData';

    constructor(private http: HttpClient) {}

    async getRowData() : Promise<RowData[]> {
        return firstValueFrom(this.http.get<RowData[]>(`${this.baseURL}/${this.rowData}`));
    }

    async getConfigs() : Promise<ColumnConfig[]> {
        return firstValueFrom(this.http.get<ColumnConfig[]>(`${this.baseURL}/${this.configData}`));
    }
}