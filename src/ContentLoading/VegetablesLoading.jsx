
import React, { useEffect } from 'react'

export default function VegetablesLoading() {
    useEffect(()=>{
        setTimeout(()=>{
            window.location.href='/addingVegetables'
          },2000)
    },[])

  return (
    <div class='container1'>
    <div class='loader'>
      <div class='loader--dot'></div>
      <div class='loader--dot'></div>
      <div class='loader--dot'></div>
      <div class='loader--dot'></div>
      <div class='loader--dot'></div>
      <div class='loader--dot'></div>
      <div class='loader--text'></div>
    </div>
  </div>
  )
}
