import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
} from "react";
import { RowData, RowObj } from "./types";
import { AgGridReact } from "ag-grid-react";
import { colDef } from "./constants";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import apiClient from "../../services/axios-instance";
import { apiUrls } from "../../utils/api-constants";
import "./index.css";
import { AxiosError } from "axios";
import LoadingOverlayComp from "./components/loading-overlay-component";

function Home() {
  const [rowData, setRowData] = useState<RowData>([]);
  const gridRef = useRef<AgGridReact<RowObj>>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const defaultColDef = useMemo(() => {
    return {
      sortable: true,
      resizable: true,
      floatingFilter: true,
      filter: "agTextColumnFilter",
    };
  }, []);
  useEffect(() => {
    if (rowData.length === 0) {
      const fetchData = async () => {
        setLoading(true);
        try {
          const rawData = await apiClient().get<RowData>(apiUrls.getRaw);
          const data = rawData.data;
          setRowData(data);
          setLoading(false);
        } catch (error: unknown) {
          setLoading(false);
          if (error instanceof AxiosError) {
            if (error.response) {
              console.error(error.response.data);
              console.error(error.response.status);
              console.error(error.response.headers);
            } else if (error.request) {
              console.error(error.request);
            } else {
              console.error("Error", error.message);
            }
          }
        }
      };
      fetchData();
    }
  }, [rowData]);
  useEffect(() => {
    if (gridRef.current !== null) {
      if (loading) {
        gridRef.current!.api.showLoadingOverlay();
      }
    }
  }, [loading]);

  const onGridReady = useCallback((params: any) => {
    /* FOR FUTURE REFERENCE */
  }, []);
  return (
    <>
      <div className="containerStyle">
        <div
          style={{ height: "100%", width: "100%" }}
          className="ag-theme-alpine"
        >
          <AgGridReact<RowObj>
            ref={gridRef}
            columnDefs={colDef}
            defaultColDef={defaultColDef}
            pagination={true}
            onGridReady={onGridReady}
            rowData={rowData as any}
            loadingOverlayComponent={LoadingOverlayComp}
            rowSelection="single"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
