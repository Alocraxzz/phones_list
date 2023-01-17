import { getAllByRole, render, screen } from '@testing-library/react';
import App from './App';
import { PhoneForm } from './components/form/phoneForm/PhoneForm';
import { Search } from './components/search/Search';
import { PhonesTable } from './components/table/phonesTable/PhonesTable';

describe('PhoneForm', () => {
    it('renders phone form', () => {
        render(<PhoneForm data-testid='phoneForm' />);
        const phoneForm = screen.getByTestId("phoneForm");
        expect(phoneForm).toBeInTheDocument();
    });

    it('renders phone form inputs', () => {
        render(<PhoneForm />);
        const inputs = screen.getAllByLabelText('input');
        expect(inputs).toHaveLength(2);
    });

    it('renders phone form submit button', () => {
        render(<PhoneForm />);
        const buttons = screen.getAllByLabelText('button');
        expect(buttons).toHaveLength(1);
    });
})

describe('SearchForm', () => {
    it('render search form', () => {
        render(<Search />);
        const search = screen.getByTestId("search");
        expect(search).toBeInTheDocument();
    });

    it('render serach form input', () => {
        render(<Search />);
        const inputs = screen.getAllByLabelText('input');
        expect(inputs).toHaveLength(1);
    });
})

describe('PhonesTable', () => {
    it('render PhonesTable form', () => {
        render(
            <PhonesTable
                phones={[
                    { id: 1, name: "Andrew", number: "380636649466" },
                    { id: 2, name: "Rolan", number: "380649442918" },
                    { id: 3, name: "Simon", number: "380649182375" }
                ]}
            />
        );
        const phonesTable = screen.getByTestId("phonesTable");
        expect(phonesTable).toBeInTheDocument();
    });

    // it('render PhonesTable form input', () => {
    //     render(<PhonesTable data-testid='phonesTable' />);
    //     const fields = screen.getAllByLabelText('input');
    //     expect(inputs).toHaveLength(1);
    // });
});