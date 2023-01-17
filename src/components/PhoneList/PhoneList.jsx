import { React } from 'react';

export const PhoneList = ({ phones }) => {
    return (
        <div>
            <h1>Список телефонів</h1>
            {phones.map((phone, index) => {
                return (
                    <div key={phone.id}>
                        <div>{index}</div>
                        <div>{phone.name}</div>
                        <div>{phone.number}</div>
                    </div>
                )
            })}
        </div>
    );
}