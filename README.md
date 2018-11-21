# react-use-portal
A simple react hook to render a component outside of its hierarchy

## Usage
Wrap the return value of your component with usePortal to render elsewhere. 

    export default function Header(){
       return usePortal(
          <header style={{
            position: 'fixed',
            top: 0,
            left: 0
          }}>
             <Stats/>
             <SearchInput />
             <Filters />
             <Pagination />
          </header>)
       )
    }
