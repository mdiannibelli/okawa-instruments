import { useEffect, useState } from "react";
import { collection, getDocs} from 'firebase/firestore';
import { firebaseDB } from "../firebase/firebase-data";

const firebaseProducts = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)
  
    // FIREBASE LOAD PRODUCTS
  // First method - with optimizate
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const products = collection(firebaseDB, 'products');
        const querySnapshot = await getDocs(products);
        const productList = querySnapshot.docs.map(product => product.data())
        setData(productList);
      } catch (error) {
        console.log('Firebase Error', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])
    return {data, loading}
}


  // Second method - without optimizate
/*   useEffect(() => {
    setLoading(true)
    const products = collection(firebaseDB, 'products');
    getDocs(products).then((res) => {
        const list = res.docs.map((product) => {
          return {
            ...product.data()
          }
        }) 
        setData(list)
    })
    .catch((err) => console.log(err))
    .finally(() => setLoading(false))
  }, [])
    return {data, loading}
} */

export default firebaseProducts;