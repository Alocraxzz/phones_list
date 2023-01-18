import { React } from 'react';
import { Container } from '../layout/Container';
import { Input } from '../ui/input/Input';

const searchCallBack = (phone, search) => {
    const format = (param) => param.toString().toLowerCase();

    return format(phone.id).includes(format(search)) 
        || format(phone.name).includes(format(search)) 
        || format(phone.number).includes(format(search));
}

const Search = ({ transferSearch, search, ...props}) => {
    return (
        <div {...props} data-testid='search'>
            <Container >
                <Input id="search"
                    value={search} placeholder=" "
                    onChange={(event) => transferSearch(event.target.value)}
                    data-testid="searchInput"
                >
                    Search
                </Input>
            </Container>
        </div>
    );
}

export {
    Search,
    searchCallBack
}