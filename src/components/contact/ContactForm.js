import React, {useState} from 'react';
import AlertBox from '../AlertBox';

export default function ContactForm(){
    const [formData, setFormData] = useState({
        Name: '',
        Email: '',
        Phone: '',
        Message: ''
    });

    var num = /^\d+$/;

    const [isAlertOpen, setIsAlertOpen] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if(formData.Name===''||formData.Email===''||formData.Phone===''||formData.Message===''){
            setAlertMessage('Input all the required fields');
            setIsAlertOpen(true);
        }

        else if(formData.Message.length>=600){
            setAlertMessage("Message should not exceed 600 words!");
            setIsAlertOpen(true);
        }

        else if(formData.Phone.length>11 || formData.Phone.length!==11 || num.test(formData.Phone)!==true){
            setAlertMessage("Invalid Contact Number!");
            setIsAlertOpen(true);
        }

        else{
            // Send data to the database
            fetch('http://localhost/eyetistic/contact.php', {
            method: 'POST',
            body: JSON.stringify(formData)
            })
            .then((response) => response.json())
            .then((data) => {            
                console.log(data);
                if (data.status=='Success'){
                    setAlertMessage("Message have been recorded successfully");
                    setIsAlertOpen(true);}
                else if (data.status=='Failure'){
                    setAlertMessage("Error in recording message");
                    setIsAlertOpen(true);
                }
             
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        }
    };

    const closeAlert = () => {
        setIsAlertOpen(false);
    }

    return<div id="contact">
        <div className="contact-head">
            <div id="content">
                <h1> Contact Us </h1>
                <p>Feel free to contact us anytime.<br/> We will get back to you as soon as we can!</p>
            </div>

            <div>
                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="contact-fields">
                        <h2>Leave Us Message</h2>
                        <input type="text" name="Name" value={formData.Name} onChange={handleChange} placeholder="Name"/>
                        <input type="email" name="Email" value={formData.Email} onChange={handleChange} placeholder="Email"/>
                        <input type="text" name="Phone" value={formData.Phone} onChange={handleChange} placeholder="Phone"/>
                        <input type="text" name="Message" value={formData.Message} onChange={handleChange} placeholder="Message"/>
                        <button className="btn" value="Submit"> Submit </button>
                    </div>
                </form>
                <AlertBox open={isAlertOpen} onClose={closeAlert}>
                    {alertMessage}
                </AlertBox>
            </div>
        </div>
    </div>

}
