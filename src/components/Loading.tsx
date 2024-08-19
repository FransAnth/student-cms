import ContentLoader from "react-content-loader";

const TableLoader = () => {
  return (
    <div>
      <ContentLoader speed={2} width={1560} height={470}>
        <rect x="6" y="0" rx="0" ry="0" width={1580} height="60" />
        <rect x="6" y="70" rx="0" ry="0" width={1580} height="60" />
        <rect x="6" y="140" rx="0" ry="0" width={1580} height="60" />
        <rect x="6" y="210" rx="0" ry="0" width={1580} height="60" />
        <rect x="6" y="280" rx="0" ry="0" width={1580} height="60" />
        <rect x="6" y="350" rx="0" ry="0" width={1580} height="60" />
        <rect x="6" y="420" rx="0" ry="0" width={1580} height="60" />
        <rect x="6" y="490" rx="0" ry="0" width={1580} height="60" />
      </ContentLoader>
    </div>
  );
};

export default TableLoader;
