import React from "react";
import * as Flex from "@twilio/flex-ui";
import { FlexPlugin } from "@twilio/flex-plugin";
import * as OpenCTIAdaptar from "./OpenCTIController";

const PLUGIN_NAME = "SalesforceOpenCTI";

export class SalesforceOpenCTIPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * @param flex { typeof Flex }
   * @param manager { Flex.Manager }
   */
  async init(flex: typeof Flex, manager: Flex.Manager) {
    const openCTI = await OpenCTIAdaptar.getOpenCTIAdaptar();
    //タスクを受領した際に、ポップアップ
    flex.Actions.addListener("beforeAcceptTask", (payload) => {
      if (payload.task !== null) {
        console.log("BeforeAcceptTask");
        OpenCTIAdaptar.screenPop(openCTI, payload.task);
      }
    });
  }
}
