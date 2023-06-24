import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"


const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchDataA())
    dispatch(fetchDataB())
},[])

const ststeA = useSelector(state => state)
const ststeB = useSelector(state => state)

