export interface OpenCTI extends OpenCTIBase {
  screenPop: (args: {
    type: string;
    params: any;
    defaultFieldValues?: any;
    callback?: (response: CallbackResponse) => any;
  }) => any;
}

export interface OpenCTIBase {
  SCREENPOP_TYPE: {
    URL: "url";
    SOBJECT: "sobject";
    OBJECTHOME: "objecthome";
    LIST: "list";
    SEARCH: "search";
    NEW_RECORD_MODAL: "newRecord";
    FLOW: "flow";
  };
  CALL_TYPE: { INBOUND: "inbound"; OUTBOUND: "outbound"; INTERNAL: "internal" };
}

type CallbackResponse = {
  success: boolean;
  returnValue: object | null;
  errors: any[];
};
