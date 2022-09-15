import React from 'react';
import { ReactComponent as InformationIcon } from "../assets/svg/InformationIcon.svg";

export default function SubTitle( {children}  ) {

    return (

    <div className='flex items-center gap-2 text-xs'>
    <span className='font-bold text-slate-900 dark:text-white'> {children} </span>
    <span><InformationIcon/></span>
    </div>
    )
}