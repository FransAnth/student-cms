export interface ITableHeader {
  title: string;
  type: string;
  id: string;
  options?: any[];
}

export interface ITableHeaders {
  headers: ITableHeader[];
}

export interface IRowData {
  rowData: any[];
  isFetching: boolean;
}

export interface IDataTable extends ITableHeaders, IRowData {}
