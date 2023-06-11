import React, { useState } from "react";
import ShowInfo from "../../common/components/show-info";
import { apiUrls } from "../../utils/api-constants";
import CommonTable from "../../common/components/table";
import { AppRowObj } from "./types";
import { colDef } from "./constants";
import "./index.css";
function Applications() {
  const [sel, setSel] = useState<string>("");
  return (
    <>
      <ShowInfo getUrl={apiUrls.getApplications} sel={sel} setSel={setSel} />
      <div className="containerStyleForApp">
        <CommonTable<AppRowObj>
          colDef={colDef}
          getUrl={apiUrls.getApplicationByName}
          sel={sel}
        />
      </div>
    </>
  );
}

export default Applications;
