import { IDataTable } from "../../types/models/datatable-models";
import DataTableBody from "./table-data";
import DataTableHead from "./table-header";

const DataTable = ({ headers, rowData, isFetching }: IDataTable) => {
  return (
    <table className="border-collapse rounded-t-md overflow-hidden">
      <DataTableHead headers={headers} />
      <DataTableBody
        headers={headers}
        rowData={rowData}
        isFetching={isFetching}
      />
    </table>
  );
};

export default DataTable;
