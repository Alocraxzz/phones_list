import './styles/App.css';
import { React, useState } from 'react';
import { PhoneForm } from './components/form/phoneForm/PhoneForm';
import { PhonesTable } from './components/table/phonesTable/PhonesTable';
import { Container } from './components/layout/Container';
import { Search, searchCallBack } from './components/search/Search';

function App() {
    const [search, setSearch] = useState('');
    const [phones, setPhones] = useState([
        { id: 1, name: "Andrew", number: "+380636649466" },
        { id: 2, name: "Rolan", number: "+380649442918" },
        { id: 3, name: "Simon", number: "+380649182375" }
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

    return (
        <div className="App">
            <header className="App-header">
                <Container>
                    <PhoneForm transferPhone={transferPhone} />
                    <Search search={search} transferSearch={transferSearch} />
                    <PhonesTable
                        remove={removePhone}
                        phones={phones}
                        search={search}
                        searchCallBack={searchCallBack}
                    />
                </Container>
            </header>
        </div>
    );
}

export default App;