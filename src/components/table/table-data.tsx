import { IDataTable, ITableHeader } from "../../types/models/datatable-models";
import TableLoader from "../Loading";

const DataTableBody = ({ rowData, headers, isFetching }: IDataTable) => {
  return (
    <tbody>
      {isFetching ? (
        <TableLoader />
      ) : (
        rowData.map((row: any, index: number) => (
          <tr
            key={index}
            className={`${index % 2 === 0 ? "bg-white" : "bg-hoverColor"} ${
              index === rowData.length - 1 ? " border-b-2 border-primary" : ""
            }`}
          >
            {headers.map((header: ITableHeader, index: number) => (
              <td className="p-3 pl-5" key={index}>
                {row[header.id]}
              </td>
            ))}
          </tr>
        ))
      )}
    </tbody>
  );
};

export default DataTableBody;
