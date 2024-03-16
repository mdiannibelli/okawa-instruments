import {useParams} from 'react-router-dom'
import SpinnerLoading from '../SpinnerLoading';
import db from '../../db/data'
import Detail from './Detail'
import { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { firebaseDB } from '../../firebase/firebase-data';
export default function ItemDetail() {
    // with datajs
    //const [data, setData] = useState({})

    // with firebase
    const [data, setData] = useState([])

    const {id} = useParams();
    const [loading, setLoading] = useState(true)
   // console.log(data)

    // FIREBASE LOAD PRODUCTS
  useEffect(() => {
    setLoading(true)
    const products = id ? query(collection(firebaseDB, 'products'), where('id', "!=", id)) : collection(firebaseDB, 'products');
    getDocs(products).then((res) => {
        const list = res.docs.map((product) => {
          return {
            id: product.id,
            ...product.data()   
          }
        }) 
        setData(list)
    })
    .catch((err) => console.log(err))
    .finally(() => setLoading(false))
  }, [id])
    
    // DATA JS LOAD PRODUCTS
    /* useEffect(() => {
        const guitars = db.find((guitars) => guitars.id === parseInt(id))
        setData(guitars)
    }, [id]) */
   //console.log(data)
    
  return (
    <>
      {loading ? <SpinnerLoading/> : <Detail data={data} id={id}/>}
    </>
  )
}
