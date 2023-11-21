const sharedConstants = require("shared/constants");

const customerModuleParsers = {};

customerModuleParsers.customerDetails = ({
	customerDetails, customerBank, customerDp
}) => {
	let result = {};
	result.customer_ref_id = customerDetails.customer_ref_id;
	result.name = customerDetails.name;
	result.mobile = customerDetails.mobile;
	result.email = customerDetails.email;
	result.gender = customerDetails.gender;
	result.dob = customerDetails.dob;
	result.pan = customerDetails.pan;
	result.address = JSON.parse(customerDetails.address);
	result.aadhar = customerDetails.aadhar;
	result.father_name = customerDetails.father_name;
	result.occupation = customerDetails.occupation;
	result.annual_income = customerDetails.annual_income;
	result.fatca = customerDetails.fatca;
	result.pep = customerDetails.pep;
	result.customer_type = customerDetails.type;
	result.trading_experience = customerDetails.trading_experience;
	result.subscription_plan = customerDetails.subscription_plan;
	result.brokerage_plan = customerDetails.brokerage_plan;
	result.ddpi = customerDetails.ddpi;
	result.dis_booklet = customerDetails.dis_booklet;
	result.bsda = customerDetails.bsda;
	result.marital_status = customerDetails.marital_status;
	result.ucc_id = customerDetails.ucc_id;
	result.rm_code = customerDetails.rm_code;
	result.is_active = customerDetails.is_active;
	result.bank_details = customerBank.map((b) => {
		return {
			"bank_name": b.bank_name,
			"account_name": b.account_name,
			"account_number": b.account_number,
			"ifsc_code": b.ifsc_code,
			"upi_handle": b.upi_handle,
			"micr_code": b.micr_code,
			"is_default": b.is_default,
		}
	});
	result.dp_details = customerDp.map((d) => {
		return {
			"dp_provider": d.dp_provider,
			"dp_id": d.dp_id,
			"beneficiary_id": d.beneficiary_id,
			"second_holder_name": d.second_holder_name,
			"is_default": d.is_default,
		}
	})
	return result;
}


customerModuleParsers.customerProfile = ({
	customerDetails, customerBank, customerDp
}) => {
	let result = {};
	result.customer_ref_id = customerDetails[0].customer_ref_id;
	result.name = customerDetails[0].name;
	result.mobile = customerDetails[0].mobile;
	result.email = customerDetails[0].email;
	result.gender = customerDetails[0].gender;
	result.dob = customerDetails[0].dob;
	result.pan = customerDetails[0].pan;
	result.address = JSON.parse(customerDetails[0].address);
	result.aadhar = customerDetails[0].aadhar;
	result.father_name = customerDetails[0].father_name;
	result.occupation = customerDetails[0].occupation;
	result.annual_income = customerDetails[0].annual_income;
	result.fatca = customerDetails[0].fatca;
	result.pep = customerDetails[0].pep;
	result.customer_type = customerDetails[0].type;
	result.trading_experience = customerDetails[0].trading_experience;
	result.subscription_plan = customerDetails[0].subscription_plan;
	result.brokerage_plan = customerDetails[0].brokerage_plan;
	result.ddpi = customerDetails[0].ddpi;
	result.dis_booklet = customerDetails[0].dis_booklet;
	result.bsda = customerDetails[0].bsda;
	result.marital_status = customerDetails[0].marital_status;
	result.ucc_id = customerDetails[0].ucc_id;
	result.rm_code = customerDetails[0].rm_code;
	result.is_active = customerDetails[0].is_active;
	result.bank_details = customerBank.map((b) => {
		return {
			"bank_name": b.bank_name,
			"account_name": b.account_name,
			"account_number": b.account_number,
			"ifsc_code": b.ifsc_code,
			"upi_handle": b.upi_handle,
			"micr_code": b.micr_code,
			"is_default": b.is_default,
		}
	});
	result.dp_details = customerDp.map((d) => {
		return {
			"dp_provider": d.dp_provider,
			"dp_id": d.dp_id,
			"beneficiary_id": d.beneficiary_id,
			"member_id": d.member_id,
			"clearing_code": d.clearing_code,
			"second_holder_name": d.second_holder_name,
			"is_default": d.is_default,
		}
	})
	return result;
}

module.exports = customerModuleParsers;
