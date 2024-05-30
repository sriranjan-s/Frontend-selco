import React from "react";
import { CheckBox, Loader } from "@egovernments/digit-ui-react-components";
import { useTranslation } from "react-i18next";

const Status = ({ complaints, onAssignmentChange, pgrfilters }) => {
  console.log("pgrfilterspgrfilters",pgrfilters)
  const { t } = useTranslation();
  let tenant = Digit.ULBService.getCurrentTenantId();
  if(pgrfilters?.phcType.length >0)
  {
     tenant = pgrfilters?.phcType.map((ulb)=> {return ulb.code}).join(",")
    console.log("tenanttenant",tenant)
  }
  const complaintsWithCount =Digit.Hooks.pgr.useComplaintStatusCount(complaints,tenant);
  
  console.log("complaintcount", complaintsWithCount)
  let hasFilters = pgrfilters?.applicationStatus?.length;
  return (
    <div className="status-container">
      <div className="filter-label">{t("ES_IM_FILTER_STATUS")}</div>
      <div style={{marginBottom:-20}}>
      {complaintsWithCount.length === 0 && <Loader />}
      {complaintsWithCount.map((option, index) => {
        return (
          <CheckBox
            key={index}
            onChange={(e) => onAssignmentChange(e, option)}
            checked={hasFilters ? (pgrfilters.applicationStatus.filter((e) => e.code === option.code).length !== 0 ? true : false) : false}
            label={`${option.name} (${option.count || 0})`}
          />
        );
      })}
      </div>
    </div>
  );
};

export default Status;
