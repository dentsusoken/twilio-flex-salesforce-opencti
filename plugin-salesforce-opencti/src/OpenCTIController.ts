import { loadScript } from "./utils";
import { OpenCTI } from "./types/OpenCTI";

export const getOpenCTIAdaptar = async () => {
  const sfdcBaseUrl = window.location.ancestorOrigins[0];
  const sfdcUrl = `${sfdcBaseUrl}/support/api/${process.env.FLEX_APP_SF_API_VER}/lightning/opencti_min.js`;
  // openctiをロード
  await loadScript(sfdcUrl);
  const openCTI = window.sforce.opencti as OpenCTI;
  return openCTI;
};

export const screenPop = (openCTI: OpenCTI, task: any) => {
  //日本の国番号を変換
  const phoneNum = task.attributes.from.replace("+81", 0);
  openCTI.screenPop({
    type: openCTI.SCREENPOP_TYPE.FLOW,
    params: {
      // FlowのAPI名
      flowDevName: "CallCenterFlow",
      // Flowの引数
      flowArgs: [
        {
          name: "IncomingPhoneNumber",
          type: "String",
          value: `${phoneNum}`,
        },
      ],
    },
    callback: (response) => {
      console.log(response.success);
    },
  });
};
