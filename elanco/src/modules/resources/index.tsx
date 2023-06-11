import React, { useState } from "react";
import ShowInfo from "../../common/components/show-info";
import { apiUrls } from "../../utils/api-constants";
import CommonTable from "../../common/components/table";
import { AppRowObj } from "./types";
import { colDef } from "./constants";
import "./index.css";
function Resources() {
  const [sel, setSel] = useState<string>("");
  return (
    <>
      <ShowInfo
        getUrl={apiUrls.getResources}
        sel={sel}
        setSel={setSel}
        label="resources"
      />
      <div className="containerStyleForResources">
        <CommonTable<AppRowObj>
          colDef={colDef}
          getUrl={apiUrls.getResourcesByName}
          sel={sel}
        />
      </div>
    </>
  );
}

export default Resources;
