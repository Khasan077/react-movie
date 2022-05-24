import React from 'react'

export default function Footer() {
  return (
   <footer className="page-footer">
      <div className="footer-copyright">
         <div className="container text_page">
         ©{new Date().getFullYear()} NetFlix Company
         </div>
      </div>
   </footer>
  )
}
