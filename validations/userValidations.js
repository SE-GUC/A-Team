const Joi = require('joi')

module.exports = {
    registerValidation: request => {
        const registerSchema = {
            name: Joi.string().min(2).max(30).required(),
            email: Joi.string().email().required(),
            password: Joi.string().required(),
            age: Joi.number(),
            type: Joi.array().items(Joi.string().min(1).max(2)).required(),
            username: Joi.string().min(8).max(50).required(),
            date_of_birth: Joi.string().required(),
            phone: Joi.string().required(),
            is_private: Joi.boolean().required(),
            interests: Joi.array().items(Joi.string()).required(),
            info: Joi.string(), 
            field_of_work: Joi.array().items(Joi.string()),
            board_members: Joi.array().items(Joi.string()),
            reports: Joi.array.items(Joi.string()),
            years_of_experience: Joi.number(),
            skills: Joi.array().items(Joi.string()),
        }
        // if (registerSchema.type==='CA'){
        //     registerSchema.info=Joi.required();
        //     registerSchema.field_of_work=Joi.required();
        //     registerSchema.board_members=Joi.required();
        //     registerSchema.reports=Joi.required();
        // }
        // if(type==='M'){
        //     registerSchema.years_of_experience=Joi.required();
        //     registerSchema.skills=Joi.required();
        // }
        // if(registerSchema.type==='P'){
        //     registerSchema.field_of_work=Joi.required();
        //     registerSchema.board_members=Joi.required();
        // }
        return Joi.validate(request, registerSchema)
    },
}