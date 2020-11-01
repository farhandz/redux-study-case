import React, {useState} from 'react'
import {connect} from 'react-redux'

function Navbar({amount}) {
    let [data, setdata] = useState(false)
    const klikbr = () => {
        setdata(data = !data)
    }
    return (
      <nav>
        <div className="logo">
          <h2>navbar</h2>
        </div>
        <ul className={data ? "hai-manis" : ""}>
          <li>Home</li>
          <li>About</li>
          <li onClick={klikbr} className='silang'>
              x
          </li>
          <li>{data ? "ini true" : "ini false"}</li>
        </ul>
        <div onClick={klikbr} className="menuTogle">
        <h1>{amount}</h1>
        </div>
      </nav>
    );
}

function mapStateToProps (state) {
    return {amount: state.amount }
}
export default connect(mapStateToProps) (Navbar)