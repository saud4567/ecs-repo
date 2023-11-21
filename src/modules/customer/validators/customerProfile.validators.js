const sharedServices = require("shared/services");
const sharedValidators = require("shared/validators");
const customerModuleConstants = require("../constants");
const sharedConstants = require("shared/constants");

module.exports = (req) => {
  let apiKey = req.headers["api-key"];
  let apiSecret = req.headers["api-secret"];
  let customerId =req.body.customer_id
  let requestedData = req.body.requested_data;
 
//   let requestedData = req.body.requested_data;
  
  if (sharedValidators.isRequired(apiKey)) {
    sharedServices.error.throw(
      customerModuleConstants.customerProfile.errorMessages.CCDE001
    );
  }
  
  if (apiKey !== sharedConstants.appConfig.app.apiKey) {
    sharedServices.error.throw(
      customerModuleConstants.customerProfile.errorMessages.CCDE002
    );
  }

  if (sharedValidators.isRequired(apiSecret)) {
    sharedServices.error.throw(
      customerModuleConstants.customerProfile.errorMessages.CCDE003
    );
  }

  if (apiSecret !== sharedConstants.appConfig.app.apiSecret) {
    sharedServices.error.throw(
      customerModuleConstants.customerProfile.errorMessages.CCDE004
    );
  }
  if (sharedValidators.isRequired(customerId)) {
    sharedServices.error.throw(
      customerModuleConstants.customerProfile.errorMessages.CCDE005
    );
  }
  return {
    apiKey,
    apiSecret,
    customerId,
    requestedData,
  };
 
};
