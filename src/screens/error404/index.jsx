import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Error404 = () => {
  const navigate = useNavigate();
//   useEffect(() => {
//     setTimeout(() => {
//       navigate('/');
//     }, 3000)
//   }, [])
  return (
    <div style={{background: '#1b1b1f', widows: '100vw', height: '100vh', display:'flex', justifyContent: 'center', alignItems: 'center'}}>
        <div style={{scale: '1.5'}}>
            <p style={{color:'white',fontSize: '64px', fontWeight: '700', lineHeight: '64px', textAlign: 'center'}}>404</p>
            <h1 style={{color: 'white',paddingTop: '12px',letterSpacing: '2px',lineHeight: '20px',fontSize: '20px',fontWeight: '700', textAlign: 'center'}}>PAGE NOT FOUND</h1>
            <div style={{margin: '24px auto 18px', width: '64px',height: '1px',backgroundColor: '#2e2e32',}}></div>
            <p style={{margin: '0 auto',maxWidth: '256px',fontSize: '14px',fontWeight: '500',color: 'rgb(235 235 245 / 60%)', textAlign: 'center'}}>
                But if you don't change your direction, and if you keep looking, you may end up where you are heading.
            </p>
            <div style={{display:'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px'}}>
                <a class="link" href="/" aria-label="go to home" 
                style={{
                    paddingTop: '20px',
                    display: 'inline-block',
                    borderRadius: '20px',
                    padding: '8px 16px',
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#a8b1ff',
                    transition: 'border-color .25s, color .25s',
                    border: '1px solid #a8b1ff',
                    textDecoration: 'none',
                }}>
                    Take me home
                </a>
            </div>
        </div>
    </div>
  )
}

export default Error404