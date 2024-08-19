export interface ITableHeader {
  title: string;
  id: string;
}

export interface ITableHeaders {
  headers: ITableHeader[];
}

export interface IRowData {
  rowData: any[];
}

export interface IDataTable extends ITableHeaders, IRowData {}
