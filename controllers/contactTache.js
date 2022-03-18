const Contact = require("../models/Contact");





exports.addContact=async(req,res)=>{
const {name,email,contactTélé,prix , role}=req.body;
console.log(req.body)
try {
    const contact= new Contact({
        name,email,contactTélé,prix , role
    })
    await contact.save()
    res.send({msg:"contact add",contact});
} catch (error) {
    res.status(500).send("serveur error")
}

}

exports.getAllCoach=async(req,res)=>{

try {
    const coachs=await Contact.find({role:"coach"})
    res.send(coachs);
} catch (error) {  
    res.status(500).send("serveur error")
}

}
exports.getAllSalle=async(req,res)=>{

    try {
        const salles=await Contact.find({role:"salle"})
        res.send(salles);
    } catch (error) {  
        res.status(500).send("serveur error")
    }
    
    }

exports.deleteCoach=async(req,res)=>{
    const{contactId}=req.params
    try {
        await Contact.findByIdAndDelete(contactId)
        res.send("contact deleted");
    } catch (error) {
        res.status(500).send("serveur error")
    }
}
exports.deleteSalle=async(req,res)=>{
    const{contactId}=req.params
    try {
        await Contact.findByIdAndDelete(contactId)
        res.send("contact deleted");
    } catch (error) {
        res.status(500).send("serveur error")
    }
}


exports.putContact=async(req,res)=>{
    const {contactId}= req.params
    try {
        const contact=await Contact.findByIdAndUpdate(contactId,{$set:{...req.body}});
        res.send(contact)
    } catch (error) {
        res.status(500).send("serveur error")
    }
}


exports.oneGet=async(req,res)=>{
    const {contactId}= req.params
    try {
        const contact = await Contact.findById(contactId)
        res.send(contact);
    } catch (error) {
        res.status(500).send("serveur error")
    }
}