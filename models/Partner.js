class Partner {
    constructor(id,first_name,middle_name,last_name,dob,email,password,phone,country,city,account_open_on,consultancy_agency_id){
        super(id,first_name,middle_name,last_name,dob,email,password,phone,country,city,account_open_on,false);
        this.consultancy_agency_id=consultancy_agency_id;
    };

    

}
module.exports=Partner