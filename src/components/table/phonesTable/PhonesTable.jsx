import React from 'react';
import { Table } from '../Table';
import { Alert } from '../../ui/alert/Alert';
import { Button } from '../../ui/button/Button';

export const PhonesTable = ({ phones, remove, search, searchCallBack, ...props }) => {
    if (searchCallBack && search) {
        phones = phones.filter(
            (phone) => searchCallBack(phone, search)
        );
    }

    if (phones.length) {
        return (
            <Table {...props} data-testid='phonesTable'>
                <thead>
                    <tr>
                        <td>#</td>
                        <td>Name</td>
                        <td>Number</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {phones.map((phone, index) => {
                        return (
                            <tr key={phone.id} data-testid="contactRecord">
                                <td data-testid="contactId">
                                    {index + 1}
                                </td>
                                <td data-testid="contactName">
                                    {phone.name}
                                </td>
                                <td data-testid="contactNumber">
                                    {phone.number}
                                </td>
                                <td data-testid="removeContactButton">
                                    <Button onClick={() => remove(phone)}
                                        style={{ margin: 0 }}
                                    >
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        )
    } else {
        return (
            <Alert>
                Nothing was found
            </Alert>
        )
    }
}