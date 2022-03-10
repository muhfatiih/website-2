const emailReceiver = `muhammmadal99@gmail.com`



function submitForm () {

    let name = document.getElementById('input-name').value
    let email = document.getElementById('input-email').value
    let phoneNumber = document.getElementById('input-number').value
    let subject = document.getElementById('input-subject').value
    let message = document.getElementById('input-message').value
   
    
   
    if(email == '') {
        
        alert ( 'please text your email' )
        return

    } 
    
    var check = confirm('are you sure to continue?')
    if ( check === false) {

        return 
    }
    

    let form = document.createElement('a')
    
    form.href = `mailto:${email}?subject= ${subject}&body= halo my name is ${name}, ${message} ` 
    
    form.click()

    let dataObject = {
        name,
        email,
        phoneNumber,
        subject,
        message
    }
        console.table(dataObject)
}

