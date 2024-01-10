import { useEffect } from "react";
import { useState } from "react";

export default function useCurrencyInfo(currency){
    const [Data, setData]= useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((res)=>setData(res[currency]))
        console.log(Data+"data")
    },[currency])
console.log("Data for current currency"+Data);
    return Data;
}
