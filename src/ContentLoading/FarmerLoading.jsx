import React, { useEffect } from 'react'

export default function FarmerLoading() {
    useEffect(()=>{
        setTimeout(()=>{
            window.location.href='/farmerLogin'
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
