import * as React from 'react';

import Button from '@mui/material/Button';

import styles from './styles.module.css';

interface Props {
    text: string;
}

export const ExampleComponent = ({ text }: Props) => {
    React.useEffect(() => {
        console.log('Helloooooooooooooooooooo');
    }, []);

    return (
        <div className={styles.test}>
            <p>Example Component: {text}</p>
            <Button variant="contained">{text}</Button>
        </div>
    );
};
