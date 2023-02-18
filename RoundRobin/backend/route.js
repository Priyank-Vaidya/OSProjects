const express= require('express');
const router = express.Router();
const {postSchedule} = require('./controllers');

router.post('/schedule', postSchedule);
// router.get('/schedule', getAllSchedules);

module.exports = router;