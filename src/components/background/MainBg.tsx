interface MainBgProps {
    children: React.ReactNode
}

function MainBg({children}: MainBgProps) {
  return (
    <div className="bg-black">
      {children}
    </div>
  )
}
 
export default MainBg
