const sharedServices = require("shared/services");
const sharedConstants = require("shared/constants");
const customerModuleConstants = require("../constants");
const sharedModels = require("shared/models");
const moment = require("moment");
const customerModuleParsers = require("../parsers");

module.exports = async ({
  apiKey,
  apiSecret,
  customerRefId,
  requestedData,
  requestId,
}) => {
  sharedServices.loggerServices.success.info({
    requestId,
    stage: "Customer Authentication- Request params",
    msg: "Request params recieved",
    apiKey,
    customerRefId,
    apiSecret,
  });
  /** get customer profile from customer table using customerRefId*/
  const customerDetails = await sharedModels.customer.read({ customerRefId });
  if (!customerDetails.length) {
    sharedServices.loggerServices.error.error({
      requestId,
      stage: "Customer Info - Customer Profile",
      msg: "Customer Profile Not Found",
      customerRefId,
      error: customerModuleConstants.customerProfile.errorMessages.CCDE008,
    });
    sharedServices.error.throw(
      customerModuleConstants.customerProfile.errorMessages.CCDE008
    );
  }

  let whereParams = {
    customerId: customerDetails[0].customerId,
  };
  /** get customer bank and DP details */
  const customerBank = await sharedModels.customerBank.read(whereParams);
  const customerDp = await sharedModels.customerDp.read(whereParams);

  let resp = {};

  if (!requestedData) {
    resp = customerModuleParsers.customerProfile({
      customerDetails,
      customerBank,
      customerDp,
    });
  }

  sharedServices.loggerServices.success.info({
    requestId,
    stage: "Customer Info",
    msg: "Customer information",
    customerRefId,
    customerInfo: resp,
  });
  return resp;
};
