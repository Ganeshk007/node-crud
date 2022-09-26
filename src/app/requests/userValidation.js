const joi = require("joi");
// const errorFunction = require("../../utils/errorFunction");

const validation = joi.object({
     firstName: joi.string().alphanum().min(3).max(25).trim(true).required(),
     lastName: joi.string().alphanum().min(3).max(25).trim(true).required(),
     email: joi.string().email().trim(true).required(),
     phone: joi.string().length(10).pattern(/[6-9]{1}[0-9]{9}/).required()
});

const userValidation = async (req, res, next) => {

	const payload = {
		firstName: req.body.firstName,
        lastName: req.body.lastName,
		email: req.body.email,
		phone: req.body.phone
	};

	const { error } = validation.validate(payload);
	if (error) {
		res.status(406);
        // console.log("error jhapper: ${error.message}");
        // return res.json(`${error.message}`);
        res.cookie("message", `${error.message}`, { httpOnly: true });
        res.redirect("back");
		// return res.json(
			// errorFunction(true, `Error in User Data : ${error.message}`)
		// );
	} else {
		next();
	}
};
module.exports = userValidation;