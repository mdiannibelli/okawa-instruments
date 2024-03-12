import {useParams} from 'react-router-dom'
import db from '../db/data'
import Detail from './Detail'
import { useEffect, useState } from 'react';
export default function ItemDetail() {
    const [data, setData] = useState({})
    const {id} = useParams();

    useEffect(() => {
        const guitars = db.find((guitars) => guitars.id === parseInt(id))
        setData(guitars)
    }, [id])
   //console.log(data)
    
  return (
    <Detail data={data}/>
  )
}
