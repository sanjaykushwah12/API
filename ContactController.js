const ContactModel = require('../../Model/fcontact')
class ContactController{
    static contact =async(req,res)=>{
        const result =await ContactModel.find()
       // console.log(result)
        res.render('admin/contact/contactdisplay',{fc:result})

    }
    
    // static contactview = async(req,res)=>{
    //     //  console.log(req.params.id)
    //     try{
    //         const result =await ContactModel.findById(req.params.id)
    //         console.log(result)
    //         // res.render('admin/contact/contactdisplay',{fc:result})
    //     }catch(err){
    //         console.log(err)
    //     }
    
    //     }

}
module.exports = ContactController