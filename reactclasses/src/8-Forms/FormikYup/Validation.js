import {object,string,ref} from "yup"

const validations = object({
    name:string().required(),
    email:string().email().required(),
    password:string().min(5).required(),
    confirmPassword:string().oneOf([ref("password")]).required()

})

export default validations;