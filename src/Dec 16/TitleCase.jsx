import React from 'react'
import useTitleCase from '../Hooks/useTitleCase';

export default function TitleCase() {
    let Str="wellcome to react";
   let result= useTitleCase(Str);
  return (
    <div>
       { result}
    </div>
  )
}
