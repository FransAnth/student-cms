import DataTable from "../components/table/table";

const ClassroomPage = () => {
  const headers = [
    { title: "Name", id: "name" },
    { title: "Age", id: "age" },
    { title: "Performance", id: "performance" },
  ];

  const rowData = [
    { name: "Francis", age: 25, performance: "Good" },
    { name: "Crystal", age: 23, performance: "Excellent" },
    { name: "John", age: 20, performance: "Fair" },
    { name: "Mark", age: 26, performance: "Bad" },
  ];

  return (
    <div className="flex flex-col pt-12 px-8 gap-10">
      <div className="flex flex-row text-4xl">Classrooms</div>
      <DataTable headers={headers} rowData={rowData} />
    </div>
  );
};

export default ClassroomPage;
