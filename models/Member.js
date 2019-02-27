
class Member {
    constructor(id,first_name,middle_name,last_name,dob,email,password,phone,country,city,account_open_on,years_of_experience,skills,interests)
    {
        super(id,first_name,middle_name,last_name,dob,email,password,phone,country,city,account_open_on,false);
        this.years_of_experience=years_of_experience;
        this.skills=skills;
        this.interests=interests;
    };
}

module.exports=Member