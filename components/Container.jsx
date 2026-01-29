

const Container = ({className , children}) => {
  return (
    <>
    <div className={`mx-auto ${className}`}>{children}</div>
    </>
  )
}

export default Container
