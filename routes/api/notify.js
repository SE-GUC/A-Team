const router= express.Router();
const joi = require('joi');
const app = express();
app.use(express.json());
const Member = require('../../models/Member')


router
  .route('/:id/notifyMember')
  .all(async (request, response, next) => {
    const status = joi.validate(request.params, {
      id: joi.string().length(24).required()
    })
    if (status.error) {
      return response.json({ error: status.error.details[0].message })
    }
    next()
  })
  .post(async (request, response) => {
    try {
      const status = joi.validate(request.body, {
        taskid:joi.string().length(24)
      })
      if (status.error) {
        return response.json({ error: status.error.details[0].message })
      }
      
      const member = await Member.findByIdAndUpdate(request.params.id, { $push: { notifications: request.body.taskid } }).exec()
      return response.json({ data: member })
    } catch (err) {
      return response.json({ error: err.message })
    }
  });
  module.exports=router