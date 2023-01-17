import React from 'react';
import { Table } from '../Table';
import { Alert } from '../../ui/alert/Alert';
import { Button } from '../../ui/button/Button';

export const PhonesTable = ({ phones, remove, search, ...props }) => {
    if (search) {
        phones = phones.filter(
            (phone) => search(phone)
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
                            <tr key={phone.id}>
                                <td>{index + 1}</td>
                                <td>{phone.name}</td>
                                <td>+{phone.number}</td>
                                <td>
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