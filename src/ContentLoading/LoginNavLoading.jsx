import React, { useEffect } from 'react'
import "../Style/Loding.css"

export default function LoginNavLoading() {
    useEffect(()=>{
        setTimeout(()=>{
            window.location.href='/loginnavbars'
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
