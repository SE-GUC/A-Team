class Task
{
    constructor(id, time_of_post,time_of_review,monetary_compensation,price,time_of_assingment,is_assigned,assigned_id,
        time_expected,level_of_comitment,is_reviewed,experience_needed,description,p_id,skills,response_from_admin, admin_id)
        {
            this.id=id;
            this.time_of_post=time_of_post;
            this.time_of_review=time_of_review;
            this.monetary_compensation=monetary_compensation;
            this.price=price;
            this.time_of_assingment=time_of_assingment;
            this.is_assigned=is_assigned;
            this.assigned_id=assigned_id;
            this.time_expected=time_expected;
            this.level_of_comitment=level_of_comitment;
            this.is_reviewed=is_reviewed;
            this.experience_needed=experience_needed;
            this.description=description;
            this.p_id=p_id;
            this.skills=skills;
            this.response_from_admin=response_from_admin;
            this.admin_id=admin_id;

        }
} 
module.exports=Task 