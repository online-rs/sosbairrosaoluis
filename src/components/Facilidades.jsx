import React from 'react'
import styles from './Facilidades.module.css'
import Link from 'next/link'


function Facilidades(prop){
    return(
        <>
            <Link href={prop.endereco} passHref>
                <button className='btn btn-danger'>{prop.servico}</button>
            </Link>
        </>
    );
}

export default Facilidades;