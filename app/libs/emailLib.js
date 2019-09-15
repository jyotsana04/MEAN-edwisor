var nodemailer = require('nodemailer')



let sendEmail = (mailOptions)=> {

    var smtpTransport = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        auth:{
            user: 'email4testing.04@gmail.com',
            pass : 'mytestpassword'
        }
    })
    /*
    var mailOptions = {
        from: 'email4testing.04@gmail.com',
        to : 'jyotsana.negi04@gmail.com',
        subject : 'sending text from nodejs',
        text: ' yeahh I did it!'
    }
    */
    smtpTransport.sendMail(mailOptions, function(error, info){
    
        if(error){
            console.log(error)
        }else {
            console.log('Email sent' + info.response)
            
        }
    })
} 

module.exports = {
    sendEmail:sendEmail
}