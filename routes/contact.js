const express= require('express')
const {addContact,  deleteCoach,deleteSalle, putContact, oneGet, getAllCoach, getAllSalle}=require('../controllers/contactTache')
const router =express.Router();
const isAuth=require('../middleware/isAuth')
const isAdmin = require('../middleware/isAdmin')


router.post('/',isAuth,isAdmin,addContact);
router.get('/coach',getAllCoach)
router.get('/salle',getAllSalle)
router.delete('/salle/:contactId',isAuth,isAdmin,deleteSalle)
router.delete('/coach/:contactId', isAuth,isAdmin,deleteCoach)
router.put('/:contactId',isAuth,isAdmin,putContact)
router.get('/:contactId',oneGet)


module.exports=router;