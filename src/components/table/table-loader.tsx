import ContentLoader from "react-content-loader";
import { CSSProperties } from "react";

const customStyle: CSSProperties = {
  width: "100%",
};

const TableLoader = ({ columns }: any) => {
  return (
    <tr>
      {columns.map(() => (
        <td>
          <ContentLoader style={customStyle} height={370}>
            <rect x="0" y="0" rx="0" ry="0" style={customStyle} height="60" />
            <rect x="0" y="70" rx="0" ry="0" style={customStyle} height="60" />
            <rect x="0" y="140" rx="0" ry="0" style={customStyle} height="60" />
            <rect x="0" y="210" rx="0" ry="0" style={customStyle} height="60" />
            <rect x="0" y="280" rx="0" ry="0" style={customStyle} height="60" />
          </ContentLoader>
        </td>
      ))}
    </tr>
  );
};

export default TableLoader;
