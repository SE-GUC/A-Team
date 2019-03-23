const router= express.Router();
const joi = require('joi');
const app = express();
app.use(express.json());

router.post('/login', function(req, res){
    var email= req.body.email;
    var password= req.body.password;

    User.findOne({email: email, password: password}, function(err, user){
        if(err){
            console.log(err);
            return res.status(500).send();
        }
        if(!user){
            return res.status(404).send();

        }
        req.session.user= user;
        return res.status(200).send("Welcome!");
    })
});

