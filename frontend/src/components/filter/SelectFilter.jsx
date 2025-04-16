import React from 'react'
import { Form } from 'react-bootstrap'

const SelectFilter = () => {
  return (
    <div className='d-flex justify-content-center align-items-center gap-3'>
        <label>Show</label>
        <Form.Select className='select-filter'>
            <option>10</option>
            <option>25</option>
            <option>50</option>
        </Form.Select>
    </div>
  )
}

export default SelectFilter