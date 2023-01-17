import { React, useState } from 'react';
import { Form } from '../Form';
import { Input } from '../../ui/input/Input';
import { Button } from '../../ui/button/Button';
import { Alert } from '../../ui/alert/Alert';

export const PhoneForm = ({ transferPhone, ...props }) => {
    const [message, setMessage] = useState('');
    const [phone, setPhone] = useState({ id: '', name: '', number: '' });

    const validateContactName = (name) => {
        return name.length > 0 
            && name.length < 30;
    }

    const validateContactNumber = (number) => {
        return number.length > 1
            && number.length < 18;
    }

    const isPhoneValid = (phone) => phone.id && validateContactName(phone.name) && validateContactNumber(phone.number);

    const clearForm = () => {
        setPhone({ id: '', name: '', number: '' });

        setMessage('');
    }

    const addPhone = (event) => {
        event.preventDefault();

        const newPhone = { ...phone, id: Date.now() }

        if (isPhoneValid(newPhone)) {
            transferPhone(newPhone);
            clearForm();
        } else {
            if (!validateContactName(newPhone.name)) {
                setMessage('The name must contain at least one character and no more than 30');
            }
            if (!validateContactNumber(newPhone.number)) {
                setMessage('The number must contain at least two digits and no more than 18');
            }
        }
    }

    const Message = ({ message }) => {
        if (message) {
            return (
                <Alert data-testid="message">
                    {message}
                </Alert>
            );
        }
    }
    
    return (
        <Form {...props}>
            <Input id="contactName"
                value={phone.name}
                onChange={event => setPhone({ ...phone, name: event.target.value })}
                type="text"
                required
            >
                Name
            </Input>
            <Input id="contactNumber"
                value={phone.number}
                onChange={event => setPhone({ ...phone, number: event.target.value })}
                type="number"
                required
            >
                Number
            </Input>
            <Button onClick={addPhone}>
                Submit</Button>
            <Message message={message} />
        </Form>
    );
}