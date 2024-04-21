/* The above code defines a JavaScript object `myCampaignConfig` which contains configurations for
different types of campaigns - ongoing, completed, and drafts. Each campaign type has its own search
configuration with fields like campaign name, type, start date, end date, etc. The configurations
also include API details for fetching data, UI styles, search result columns, pagination settings,
and more. The object is exported for use in other parts of the codebase. */
export const myCampaignConfig = {
  tenantId: "mz",
  moduleName: "commonCampaignUiConfig",
  showTab: true,
  myCampaignConfig: [
    {
      label: "CAMPAIGN_ONGOING",
      type: "search",
      apiDetails: {
        serviceName: "/project-factory/v1/project-type/search",
        requestParam: {},
        requestBody: {},
        minParametersForSearchForm: 0,
        minParametersForFilterForm: 0,
        masterName: "commonUiConfig",
        moduleName: "MyCampaignConfigOngoing",
        tableFormJsonPath: "requestBody.inbox",
        filterFormJsonPath: "requestBody.custom",
        searchFormJsonPath: "requestBody.custom",
      },
      sections: {
        search: {
          uiConfig: {
            headerLabel: "ES_COMMON_SEARCH",
            type: "search",
            typeMobile: "filter",
            searchWrapperStyles: {
              flexDirection: "column-reverse",
              marginTop: "1.4rem",
              alignItems: "center",
              justifyContent: "end",
              gridColumn: "3",
            },
            headerStyle: null,
            primaryLabel: "Search",
            secondaryLabel: "ES_COMMON_CLEAR_SEARCH",
            minReqFields: 0,
            defaultValues: {
              name: "",
              type: "",
            },
            fields: [
              {
                label: "CAMPAIGN_SEARCH_NAME",
                type: "text",
                isMandatory: false,
                disable: false,
                populators: {
                  name: "campaignName",
                  error: "TQM_ERR_VALID_CAMPAIGN_NAME",
                  style: {
                    marginBottom: "0px",
                  },
                },
              },
              {
                label: "CAMPAIGN_SEARCH_TYPE",
                type: "apidropdown",
                isMandatory: false,
                disable: false,
                populators: {
                  optionsCustomStyle: {
                    top: "2.3rem",
                  },
                  name: "campaignType",
                  optionsKey: "code",
                  allowMultiSelect: false,
                  masterName: "commonUiConfig",
                  moduleName: "MyCampaignConfigOngoing",
                  customfn: "populateCampaignTypeReqCriteria",
                },
              },
            ],
          },
          label: "",
          labelMobile: "ES_COMMON_SEARCH",
          children: {},
          show: true,
        },
        searchResult: {
          uiConfig: {
            columns: [
              {
                label: "CAMPAIGN_NAME",
                jsonPath: "campaignName",
                additionalCustomization: true,
              },
              {
                label: "CAMPAIGN_TYPE",
                jsonPath: "projectType",
                prefix: "dd",
                translate: true,
              },
              {
                label: "CAMPAIGN_BENEFICIARY_TYPE",
                jsonPath: "hierarchyType",
                prefix: "",
                translate: true,
              },
              {
                label: "CAMPAIGN_START_DATE",
                jsonPath: "campaignDetails.startDate",
                additionalCustomization: true,
                disableSortBy: true,
              },
              {
                label: "CAMPAIGN_END_DATE",
                jsonPath: "campaignDetails.endDate",
                additionalCustomization: true,
                disableSortBy: true,
              },
            ],
            enableGlobalSearch: false,
            enableColumnSort: true,
            resultsJsonPath: "CampaignDetails",
            customDefaultPagination: {
              limit: 5,
              offset: 0,
            },
            customPageSizesArray: [5, 10, 15, 20],
            tableClassName: "table pqm-table",
          },
          children: {},
          show: true,
        },
        links: {
          show: false,
        },
        filter: {
          show: false,
        },
      },
      additionalSections: {},
      persistFormData: true,
      showAsRemovableTagsInMobile: true,
    },
    {
      label: "CAMPAIGN_COMPLETED",
      type: "search",
      apiDetails: {
        serviceName: "/project-factory/v1/project-type/search",
        requestParam: {},
        requestBody: {},
        minParametersForSearchForm: 0,
        minParametersForFilterForm: 0,
        masterName: "commonUiConfig",
        moduleName: "MyCampaignConfigCompleted",
        tableFormJsonPath: "requestBody.inbox",
        filterFormJsonPath: "requestBody.custom",
        searchFormJsonPath: "requestBody.custom",
      },
      sections: {
        search: {
          uiConfig: {
            headerLabel: "ES_COMMON_SEARCH",
            type: "search",
            typeMobile: "filter",
            searchWrapperStyles: {
              flexDirection: "column-reverse",
              marginTop: "1.4rem",
              alignItems: "center",
              justifyContent: "end",
              gridColumn: "3",
            },
            headerStyle: null,
            primaryLabel: "Search",
            secondaryLabel: "ES_COMMON_CLEAR_SEARCH",
            minReqFields: 0,
            defaultValues: {
              name: "",
              type: "",
            },
            fields: [
              {
                label: "CAMPAIGN_SEARCH_NAME",
                type: "text",
                isMandatory: false,
                disable: false,
                populators: {
                  name: "campaignName",
                  error: "TQM_ERR_VALID_CAMPAIGN_NAME",
                  style: {
                    marginBottom: "0px",
                  },
                },
              },
              {
                label: "CAMPAIGN_SEARCH_TYPE",
                type: "apidropdown",
                isMandatory: false,
                disable: false,
                populators: {
                  optionsCustomStyle: {
                    top: "2.3rem",
                  },
                  name: "campaignType",
                  optionsKey: "code",
                  allowMultiSelect: false,
                  masterName: "commonUiConfig",
                  moduleName: "MyCampaignConfigCompleted",
                  customfn: "populateCampaignTypeReqCriteria",
                },
              },
            ],
          },
          label: "",
          labelMobile: "ES_COMMON_SEARCH",
          children: {},
          show: true,
        },
        searchResult: {
          uiConfig: {
            columns: [
              {
                label: "CAMPAIGN_NAME",
                jsonPath: "campaignName",
                additionalCustomization: true,
              },
              {
                label: "CAMPAIGN_TYPE",
                jsonPath: "projectType",
                prefix: "dd",
                translate: true,
              },
              {
                label: "CAMPAIGN_BENEFICIARY_TYPE",
                jsonPath: "hierarchyType",
                prefix: "",
                translate: true,
              },
              {
                label: "CAMPAIGN_START_DATE",
                jsonPath: "campaignDetails.startDate",
                additionalCustomization: true,
                disableSortBy: true,
              },
              {
                label: "CAMPAIGN_END_DATE",
                jsonPath: "campaignDetails.endDate",
                additionalCustomization: true,
                disableSortBy: true,
              },
            ],
            enableGlobalSearch: false,
            enableColumnSort: true,
            resultsJsonPath: "CampaignDetails",
            customDefaultPagination: {
              limit: 5,
              offset: 0,
            },
            customPageSizesArray: [5, 10, 15, 20],
            tableClassName: "table pqm-table",
          },
          children: {},
          show: true,
        },
        links: {
          show: false,
        },
        filter: {
          show: false,
        },
      },
      additionalSections: {},
      persistFormData: true,
      showAsRemovableTagsInMobile: true,
    },
    {
      label: "CAMPAIGN_DRAFTS",
      type: "search",
      apiDetails: {
        serviceName: "/project-factory/v1/project-type/search",
        requestParam: {},
        requestBody: {},
        minParametersForSearchForm: 0,
        minParametersForFilterForm: 0,
        masterName: "commonUiConfig",
        moduleName: "MyCampaignConfigDrafts",
        tableFormJsonPath: "requestBody.inbox",
        filterFormJsonPath: "requestBody.custom",
        searchFormJsonPath: "requestBody.custom",
      },
      sections: {
        search: {
          uiConfig: {
            headerLabel: "ES_COMMON_SEARCH",
            type: "search",
            typeMobile: "filter",
            searchWrapperStyles: {
              flexDirection: "column-reverse",
              marginTop: "1.4rem",
              alignItems: "center",
              justifyContent: "end",
              gridColumn: "3",
            },
            headerStyle: null,
            primaryLabel: "Search",
            secondaryLabel: "ES_COMMON_CLEAR_SEARCH",
            minReqFields: 0,
            defaultValues: {
              campaignName: "",
              campaignType: "",
            },
            fields: [
              {
                label: "CAMPAIGN_SEARCH_NAME",
                type: "text",
                isMandatory: false,
                disable: false,
                populators: {
                  name: "campaignName",
                  error: "TQM_ERR_VALID_CAMPAIGN_NAME",
                  style: {
                    marginBottom: "0px",
                  },
                },
              },
              {
                label: "CAMPAIGN_SEARCH_TYPE",
                type: "apidropdown",
                isMandatory: false,
                disable: false,
                populators: {
                  optionsCustomStyle: {
                    top: "2.3rem",
                  },
                  name: "campaignType",
                  optionsKey: "code",
                  allowMultiSelect: false,
                  masterName: "commonUiConfig",
                  moduleName: "MyCampaignConfigDrafts",
                  customfn: "populateCampaignTypeReqCriteria",
                },
              },
            ],
          },
          label: "",
          labelMobile: "ES_COMMON_SEARCH",
          children: {},
          show: true,
        },
        searchResult: {
          uiConfig: {
            columns: [
              {
                label: "CAMPAIGN_NAME",
                jsonPath: "campaignName",
                additionalCustomization: true,
              },
              {
                label: "CAMPAIGN_TYPE",
                jsonPath: "projectType",
                prefix: "dd",
                translate: true,
              },
              {
                label: "CAMPAIGN_BENEFICIARY_TYPE",
                jsonPath: "hierarchyType",
                prefix: "",
                translate: true,
              },
              {
                label: "CAMPAIGN_START_DATE",
                jsonPath: "campaignDetails.startDate",
                additionalCustomization: true,
                disableSortBy: true,
              },
              {
                label: "CAMPAIGN_END_DATE",
                jsonPath: "campaignDetails.endDate",
                additionalCustomization: true,
                disableSortBy: true,
              },
            ],
            enableGlobalSearch: false,
            enableColumnSort: true,
            resultsJsonPath: "CampaignDetails",
            customDefaultPagination: {
              limit: 5,
              offset: 0,
            },
            customPageSizesArray: [5, 10, 15, 20],
            tableClassName: "table pqm-table",
          },
          children: {},
          show: true,
        },
        links: {
          show: false,
        },
        filter: {
          show: false,
        },
      },
      additionalSections: {},
      persistFormData: true,
      showAsRemovableTagsInMobile: true,
    },
  ],
};
