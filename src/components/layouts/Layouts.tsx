import React from "react"

interface layoutProps {
    children: React.ReactNode
}

function Layouts({ children}: layoutProps) {
  return (
    <div className="px-5 xl:px-[100px] md:px-14 w-full h-full">
      {children}
    </div>
  )
}

export default Layouts
