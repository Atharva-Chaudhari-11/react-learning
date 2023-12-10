import {useEffect , useState} from "react"

// we can create our custome hooks using the available hooks
// hooks are nothing but just a function which return some array or etc

// in most of cases function start with 'use' used as a starting letter to understan it we can use

function useCurrencyInfo(currency) {
    const [data ,setData]=useState({})
     useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((res)=>setData(res[currency])) 
    },[currency])
    console.log(data);          
    return data
}


export default useCurrencyInfo;