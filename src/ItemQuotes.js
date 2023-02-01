import React from 'react'
import Paper from '@mui/material/Paper';

import { styled } from '@mui/material/styles';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const ItemQuotes = ({ text, author }) => {
    const myStyle = {
        color: "black"
    }
    return (
        <div>
            <Item style={myStyle}>{text} Author:{author}</Item>
            <pre>Author:{author}</pre>
        </div>
    )
}

export default ItemQuotes
