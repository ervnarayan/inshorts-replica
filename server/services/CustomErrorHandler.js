class CustomErrorHandler {
    constructor(status, msg){
        super();
        this.status = status;
        this.msg = msg;
    }

    static notFound(message = 'Data not found'){
        return new CustomErrorHandler(404, message);
    }

}

export default CustomErrorHandler;