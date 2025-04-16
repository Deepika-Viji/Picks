import React from 'react'
import { Form } from 'react-bootstrap'

const DataTableFilter = () => {
  return (
    <div className="d-flex data-table-filter default-data-table">
        
        <div id="productTableLength">
            <div className='form-select-options'>
                <label>Show</label>
                <Form.Select style={{maxWidth:67}}>
                    <option>10</option>
                    <option>25</option>
                    <option>50</option>
                </Form.Select>
            </div>
        </div>
        <div id="tableSearch">
            <div className='table-form-text'>
                <Form.Control type='text' placeholder='Search..'/>
            </div> 
        </div>
    </div>
  )
}

export default DataTableFilter