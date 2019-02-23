


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
    }
}
class Member extends User{
    constructor(id,first_name,middle_name,last_name,dob,email,password,phone,country,city,account_open_on,years_of_experience,skills,interests)
    {
        super(id,first_name,middle_name,last_name,dob,email,password,phone,country,city,account_open_on,false);
        this.years_of_experience=years_of_experience;
        this.skills=skills;
        this.interests=interests;
    }
}
class Partner extends User{
    constructor(id,first_name,middle_name,last_name,dob,email,password,phone,country,city,account_open_on,consultancy_agency_id){
        super(id,first_name,middle_name,last_name,dob,email,password,phone,country,city,account_open_on,false);
        this.consultancy_agency_id=consultancy_agency_id;
    }

}
