import { EllipsisVertical } from "lucide-react";
import {
  IDataTable,
  ITableHeader,
} from "../../interface/table/datatable-models";
import TableLoader from "./table-loader";

const DataTableBody = ({ rowData, headers, isFetching }: IDataTable) => {
  return (
    <tbody>
      {isFetching ? (
        <TableLoader />
      ) : (
        rowData.map((row: any, index: number) => (
          <tr
            key={index}
            className={`${index % 2 === 0 ? "bg-white" : "bg-secondary"} ${
              index === rowData.length - 1 ? " border-b-2 border-primary" : ""
            }`}
          >
            {headers.map((header: ITableHeader, header_index: number) => {
              if (header.id === "kebab") {
                return (
                  <td key={header_index}>
                    <button
                      className="cursor-pointer"
                      onClick={() => console.log("francis")}
                    >
                      <EllipsisVertical />
                    </button>
                  </td>
                );
              } else {
                return (
                  <td className="p-3 pl-5" key={header_index}>
                    {row[header.id]}
                  </td>
                );
              }
            })}
          </tr>
        ))
      )}
    </tbody>
  );
};

export default DataTableBody;
