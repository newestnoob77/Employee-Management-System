export default class ApplicationError extends Error{
    constructor(code,message){
        this.code=code,
        super(message)
    }
}