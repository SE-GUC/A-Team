
class User{
    constructor(id,first_name,middle_name,last_name,dob,email,password,phone,country,city,account_open_on,isAdmin)
    {
        this.id=id;
        this.first_name=first_name;
        this.middle_name=middle_name;
        this.last_name=last_name;
        this.dob=dob;
        this.email=email;
        this.password=password;
        this.phone=phone;
        this.country=country;
        this.city=city;
        this.account_open_on=account_open_on;
        this.isAdmin=isAdmin;
    };
}



module.exports=User;
