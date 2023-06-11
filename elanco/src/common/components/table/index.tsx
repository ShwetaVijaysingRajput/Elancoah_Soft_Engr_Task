import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
} from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import apiClient from "../../../services/axios-instance";
import "./index.css";
import { AxiosError } from "axios";
import LoadingOverlayComp from "../../../modules/home/components/loading-overlay-component";

function CommonTable<RowObjType>({
  colDef,
  getUrl,
  sel,
}: {
  colDef: { field: string }[];
  getUrl: string;
  sel: string;
}) {
  const [rowData, setRowData] = useState<RowObjType[]>([]);
  const gridRef = useRef<AgGridReact<RowObjType>>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const defaultColDef = useMemo(() => {
    return {
      sortable: true,
      resizable: true,
      floatingFilter: true,
      filter: true,
    };
  }, []);
  useEffect(() => {
    if (gridRef.current !== null) {
      if (loading) {
        gridRef.current!.api.showLoadingOverlay();
      }
    }
  }, [loading]);

  useEffect(() => {
    if (sel.length > 0) {
      const fetchData = async () => {
        setLoading(true);
        try {
          const rawData = await apiClient().get<RowObjType[]>(
            `${getUrl}${sel}`
          );
          const data = rawData.data;
          setRowData(data);
          setLoading(false);
        } catch (error: unknown) {
          setLoading(false);
          setRowData([]);
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
          } else {
            console.error(error);
          }
        }
      };
      fetchData();
    } else {
      setRowData([]);
    }
  }, [getUrl, rowData.length, sel]);

  const onGridReady = useCallback((_params: any) => {}, []);
  return (
    <>
      <div className="ag-theme-alpine inner-container-style">
        <AgGridReact<RowObjType>
          ref={gridRef}
          columnDefs={colDef}
          defaultColDef={defaultColDef}
          pagination={true}
          onGridReady={onGridReady}
          rowData={rowData}
          loadingOverlayComponent={LoadingOverlayComp}
          rowSelection="single"
          suppressMenuHide={true}
          animateRows={true}
        />
      </div>
      {/* </div> */}
    </>
  );
}

export default CommonTable;
