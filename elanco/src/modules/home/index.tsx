import React, { useState, useEffect } from "react";
import Table from "./components/table";
import { RowData } from "./types";

function Home() {
  const [rowData, setRowData] = useState<RowData>([]);
  useEffect(() => {
    if (rowData.length > 10) {
      setRowData([]);
    }
    console.log(rowData);
  }, [rowData]);
  return <Table />;
}

export default Home;
