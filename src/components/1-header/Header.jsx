
import Header1 from "./header1/Header1"
import Header2 from "./header2/Header2"
import Header3 from "./header3/Header3"

// eslint-disable-next-line react/prop-types
export default function Header({active , setActive , display , setDisplay , productsData , setUserDisplay , search  ,setSearch}) {
  return (
    <header>
        <Header1/>
        <Header2 
          active={active} setActive={setActive}
          display={display} setDisplay={setDisplay}
          productsData={productsData}
          setUserDisplay={setUserDisplay}
          serach={search} setSearch={setSearch}
        />
        <Header3 active={active} setActive={setActive}/>
    </header>
  )
}
