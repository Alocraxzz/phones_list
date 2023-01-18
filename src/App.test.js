import { fireEvent, render, screen, act } from '@testing-library/react';
import App from './App';
import { PhoneForm } from './components/form/phoneForm/PhoneForm';
import { Search, searchCallBack } from './components/search/Search';
import { PhonesTable } from './components/table/phonesTable/PhonesTable';
import { shallow, mount } from "enzyme";

describe('PhoneForm', () => {

    beforeEach(() => {
        act(() => {
            render(<PhoneForm />);
        });
    });

    it('renders phone form', () => {
        const phoneForm = screen.getByTestId("phoneForm");

        expect(phoneForm).toBeInTheDocument();
    });

    it('renders phone form inputs', () => {
        const inputs = screen.getAllByLabelText('phonesFormInput');

        expect(inputs).toHaveLength(2);
    });

    it('renders phone form submit button', () => {
        const buttons = screen.getAllByTestId('phonesFormButton');

        expect(buttons).toHaveLength(1);
    });

    it('inputs connectivity testing', () => {
        const inputs = screen.getAllByLabelText("phonesFormInput");

        inputs.forEach((input) => {
            expect(input).toContainHTML("");
        });

        inputs.forEach((input) => {
            fireEvent.input(input, {
                target: { value: "1" }
            });

            expect(input).toContainHTML("1");
        });
    });

    it('try mock submit button click event', () => {
        const mockCallBack = jest.fn();
        const submitBtn = screen.getByTestId("phonesFormButton");
        
        submitBtn.addEventListener("click", mockCallBack);
        submitBtn.click();

        expect(mockCallBack).toHaveBeenCalledTimes(1);
    });
});

describe('Message', () => {

    let nameInput;
    let numberInput;
    let submitBtn;

    beforeEach(() => {
        render(<PhoneForm />);

        nameInput = screen.getByTestId('contactNameInput');
        numberInput = screen.getByTestId('contactNumberInput');
        submitBtn = screen.getByTestId("phonesFormButton");

    });

    it("renders error message for contact name input in phone form", () => {
        expect(screen.queryByTestId("message")).toBeNull();

        fireEvent.input(numberInput, {
            target: {
                value: "12345678"
            }
        });

        expect(numberInput).toContainHTML("12345678");

        fireEvent.click(submitBtn);

        expect(screen.queryByTestId("message")).toContainHTML("The name must contain at least one character and no more than 30");
    });

    it("renders error message for contact number input in phone form", () => {
        expect(screen.queryByTestId("message")).toBeNull();

        fireEvent.input(nameInput, {
            target: { value: "Semuel" }
        });

        fireEvent.input(numberInput, {
            target: { value: "+1" }
        });

        expect(nameInput).toContainHTML("Semuel");

        fireEvent.click(submitBtn);

        expect(screen.queryByTestId("message")).toContainHTML("The number must contain at least two digits and no more than 18");
    });
});

const phones = [
    { id: 1, name: "Andrew", number: "+380636649466" },
    { id: 2, name: "Rolan", number: "+380649442918" },
    { id: 3, name: "Simon", number: "+380649182375" }
];

describe('PhonesTable', () => {

    beforeEach(() => {
        render(
            <PhonesTable phones={phones} />
        );
    });

    it('render phones table form', () => {
        const phonesTable = screen.getByTestId("phonesTable");
        expect(phonesTable).toBeInTheDocument();
    });

    it('render phones table records', () => {
        const records = screen.getAllByTestId("contactRecord");
        expect(records).toHaveLength(3);
    });

    it('render phones table records remove buttons', () => {
        const records = screen.getAllByTestId("removeContactButton");
        expect(records).toHaveLength(3);
    });

    it('render phones table record content', () => {
        const recordsByContactName = screen.getAllByTestId("contactName");

        phones.forEach((phone) => {
            const recordByName = recordsByContactName.find((record) => record.textContent === phone.name);
            expect(recordByName).toBeInTheDocument();
        });
    });
});

describe('Search', () => {

    describe('', () => {

        beforeEach(() => {
            render(<Search />);
        });

        it("renders search form", () => {
            const search = screen.getByTestId("search");

            expect(search).toBeInTheDocument();
        });

        it('render serach form input', () => {
            const inputs = screen.getAllByTestId('searchInput');

            expect(inputs).toHaveLength(1);
        });
    });

    it("renders phones records using search", () => {
        const search = "andrew";

        render(
            <PhonesTable phones={phones} searchCallBack={searchCallBack} search={search} />
        );

        const records = screen.getAllByTestId("contactRecord");

        expect(records).toHaveLength(1);
    });
});

describe('Enzyme', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(<PhoneForm />);
    });

    it('find something using enzyme', () => {
        expect(wrapper.find("button").text()).toContain("Submit");
    });
});