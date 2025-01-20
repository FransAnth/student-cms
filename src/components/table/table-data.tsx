import { EllipsisVertical } from "lucide-react";
import {
  IDataTable,
  ITableHeader,
} from "../../interface/table/datatable-models";
import TableLoader from "./table-loader";
import useToggleKebab from "../../hooks/toogle-menu";
import { MutableRefObject, useRef } from "react";

const DataTableBody = ({ rowData, headers, isFetching }: IDataTable) => {
  const { toggleKebab } = useToggleKebab();
  const kebabRef: MutableRefObject<HTMLDivElement[] | null[]> = useRef([]);

  return (
    <tbody>
      {isFetching ? (
        <TableLoader />
      ) : rowData.length ? (
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
                    <div
                      onClick={() => toggleKebab(index, true, kebabRef)}
                      className="cursor-pointer"
                    >
                      <EllipsisVertical />
                    </div>
                    <div
                      ref={(el) => (kebabRef.current[index] = el)}
                      className={`z-50 absolute right-2 kebab${index} hidden `}
                    >
                      <ul className="text-sm text-start bg-white rounded shadow-lg flex flex-col space-y-1 mr-10 cursor-pointer">
                        {header.options?.map((item: any) => (
                          <li
                            key={item.name}
                            className="px-8 py-2"
                            onClick={() => item?.action(row)}
                          >
                            {item.name}
                          </li>
                        ))}
                      </ul>
                    </div>
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
      ) : (
        <tr>
          <td
            colSpan={headers.length}
            className="bg-secondary h-16 w-full text-center border-b-2 border-primary"
          >
            No Result Found
          </td>
        </tr>
      )}
    </tbody>
  );
};

export default DataTableBody;
