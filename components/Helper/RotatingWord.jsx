import React, { useEffect } from 'react'
import './RW.css'
import initRotatingText from './RW.js'

const RotatingWord = ({children, headText , divClass, pClass}) => {
    useEffect(() => {
        const cleanup = initRotatingText({
            containerSelector: '.rotating-text', // default - change if needed
            wordSelector: '.word',
            interval: 4000,
            letterDelay: 80,
            entryDelay: 340,
        });

        return () => cleanup();
    }, []);
  return (
      <>
                
          <div class={`rotating-text ${divClass} `}  >
              <p className={`justify-center ${pClass} `} >
                  {children}
              </p>
          </div>

      </>
  )
}

export default RotatingWord