export interface ITableHeader {
  title: string;
  id: string;
}

export interface ITableHeaders {
  headers: ITableHeader[];
}

export interface IRowData {
  rowData: any[];
  isFetching: boolean;
}

export interface IDataTable extends ITableHeaders, IRowData {}
