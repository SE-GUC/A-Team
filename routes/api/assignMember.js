router
  .route('/:id/assignMember')
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
        memberid:joi.string().length(24)
      })
      if (status.error) {
        return response.json({ error: status.error.details[0].message })
      }
      
      const user = await User.findByIdAndUpdate(request.params.id, { $push: { assignedMember: request.body.memberid } }).exec()
      return response.json({ data: user })
    } catch (err) {
      return response.json({ error: err.message })
    }
  })