import React, { useEffect, useState } from 'react'

function Footer() {
    const [year, setYear] = useState('')

    useEffect(() => {
      const date = new Date();
      setYear(date.getFullYear());  
    }, [])

  return (
    <footer className="text-light p-3 text-center">
      © {year} Copyright: Peiman Hosseini
    </footer>
  );
}

export default Footer