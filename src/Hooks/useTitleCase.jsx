import React, { useEffect, useState } from 'react'

export default function useTitleCase(str='') {
const [caseText,setCaseText]=useState('');
useEffect(()=>{

    if(str){
        const titleCased=str
        .split(' ')
        .map(word=>word.charAt(0).toUpperCase()+word.slice(1)
        .toLowerCase())
        .join(' ');
setCaseText(titleCased);
    }
  
},[str])
  return caseText;
}
