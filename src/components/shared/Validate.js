export const validate = (name,email) => {

    const errors = {};

    if(!email){
        errors.email = "ایمیل باید وارد شود"
    }else if(!/\S+@\S+\.\S+/.test(email) ){
        errors.email = "ایمیل نامعتبر است"
    }else{
        delete errors.email
    }

    if(!name.trim()){
        errors.name = "اسم باید وارد شود"
    }else {
       delete errors.name
    }
    return errors;

}