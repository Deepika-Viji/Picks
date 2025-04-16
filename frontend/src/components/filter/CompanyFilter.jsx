import React from 'react'
import SelectFilter from './SelectFilter'
import { Form } from 'react-bootstrap'

const CompanyFilter = () => {
  return (
    <div className="table-filter-option">
        <div className="row g-3">
            <div className="col-xl-10 col-9 col-xs-12">
                <div className="row g-3">
                    <div className="col">
                        <form className="row g-2">
                            <div className="col">
                                <Form.Select className="form-control form-control-sm" data-placeholder="Bulk action">
                                    <option value="">Bulk action</option>
                                    <option value="0">Move to trash</option>
                                </Form.Select>
                            </div>
                            <div className="col">
                                <button className="btn btn-sm btn-primary w-100">Apply</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="col-xl-2 col-3 col-xs-12 d-flex justify-content-end">
                <SelectFilter/>
            </div>
        </div>
    </div>
  )
}

export default CompanyFilter