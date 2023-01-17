import { React } from 'react';
import { Container } from '../layout/Container';
import { Input } from '../ui/input/Input';

export const Search = ({ transferSearch, search, ...props}) => {
    return (
        <div {...props} data-testid='search'>
            <Container >
                <Input id="search"
                    value={search} placeholder=" "
                    onChange={(event) => transferSearch(event.target.value)}
                    aria-label="input"
                >
                    Search
                </Input>
            </Container>
        </div>
    )
}