import { Router } from 'express';
import models from "../models";
const bodyParser =  require('body-parser');
const router = Router();

router.post('/new-user', async (req, res) => {
    const user = await models.User.create({
        userName: req.body.userName,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password,
        email: req.body.email,
        telephoneNumber: req.body.telephoneNumber,
        streetAddress: req.body.streetAddress,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip,
    });
    return res.json(user);
});

export default router;