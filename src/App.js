import './styles/App.css';
import { React, useState } from 'react';
import { PhoneForm } from './components/form/phoneForm/PhoneForm';
import { PhonesTable } from './components/table/phonesTable/PhonesTable';
import { Container } from './components/layout/Container';
import { Search } from './components/search/Search';

function App() {
    const [search, setSearch] = useState('');
    const [phones, setPhones] = useState([
        { id: 1, name: "Andrew", number: "380636649466" },
        { id: 2, name: "Rolan", number: "380649442918" },
        { id: 3, name: "Simon", number: "380649182375" }
    ]);

    const transferPhone = (phone) => {
        setPhones([...phones, phone]);
    }

    const removePhone = (phone) => {
        setPhones(phones.filter(p => p.id !== phone.id));
    }

    const transferSearch = (search) => {
        setSearch(search);
    }

    const serachCallback = (phone) => {
        const format = (param) => param.toString().toLowerCase();

        return format(phone.id).includes(format(search)) 
            || format(phone.name).includes(format(search)) 
            || format(phone.number).includes(format(search));
    }

    return (
        <div className="App">
            <header className="App-header">
                <Container>
                    <PhoneForm transferPhone={transferPhone} />
                    <Search search={search} transferSearch={transferSearch}/>
                    <PhonesTable remove={removePhone} phones={phones} search={serachCallback} />
                </Container>
            </header>
        </div>
    );
}

export default App;
