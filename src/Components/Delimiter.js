import React from 'react';

export default function Delimiter({number}) {
    if(number >= 0){        
        const delimiterNumebr = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return delimiterNumebr
    } else {
        return null
    }
}