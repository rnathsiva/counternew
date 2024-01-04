import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, reset, increment, incrementbyAmount } from './Redux/counterSlice'

function Counter() {

  const dispatch = useDispatch()
  const count = useSelector((state) => state.counterSlice.count)
  const [amount, setAmount] = useState(0)
  const handleIncrement = () => {
    if (amount > 0) {
      dispatch(incrementbyAmount(+amount))
      setAmount("")
    }
    else {
      alert("enter valid amount")
    }
  }

  return (
    <div style={{ width: '600px' }}
      className=' container-fluid mt-5 border rounded p-5 d-flex justify-content-center align-items-center flex-column'>
      <h1 style={{ fontSize: '100px' }}>{count}</h1>
      {/* <h1>{count}</h1> */}
      <div className="d-flex justify-content-evenly mt-5 w-100">
        <button className='btn btn-success' onClick={() => dispatch(increment())}>Increment</button>
        <button className='btn btn-danger' onClick={() => dispatch(reset())}>Reset</button>
        <button className='btn btn-warning' onClick={() => dispatch(decrement())}>Decrement</button>
      </div>

      <div className="d-flex justify-content-between mt-5 w-100">
        <input type="text" onChange={e => setAmount(e.target.value)} className="form-control" value={amount} placeholder='Enter the amount to be Incremented!!' />
        <button onClick={handleIncrement} className='btn btn-primary ms-3'>Increment by amount</button>

      </div>
    </div>


  )
}

export default Counter