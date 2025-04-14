import React from 'react'

const SocialVisitors = () => {
  return (
    <div className="col-xxl-4 col-md-6">
        <div className="panel social-visitor">
            <div className="panel-header">
                <h5>Social Media Visitor</h5>
                <div className="btn-box d-sm-block d-none">
                    <button className="btn btn-sm btn-outline-primary">Week</button>
                    <button className="btn btn-sm btn-outline-primary">Month</button>
                    <button className="btn btn-sm btn-outline-primary">Year</button>
                </div>
            </div>
            <div className="panel-body">
                <table className="table table-borderless visitor-table">
                    <thead>
                        <tr>
                            <th>Sources</th>
                            <th>Visitor</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><span className="text-fb"><i className="fa-brands fa-facebook-f"></i></span> Facebook</td>
                            <td>153,100</td>
                        </tr>
                        <tr>
                            <td><span className="text-behance"><i className="fa-brands fa-behance"></i></span> Behance</td>
                            <td>234,200</td>
                        </tr>
                        <tr>
                            <td><span className="text-comb"><i className="fa-brands fa-y-combinator"></i></span> Combinator</td>
                            <td>326,012</td>
                        </tr>
                        <tr>
                            <td><span className="text-insta"><i className="fa-brands fa-instagram"></i></span> Instagram</td>
                            <td>124,420</td>
                        </tr>
                        <tr>
                            <td><span className="text-dribble"><i className="fa-brands fa-dribbble"></i></span> Dribble</td>
                            <td>554,220</td>
                        </tr>
                        <tr>
                            <td><span className="text-pinterest"><i className="fa-brands fa-pinterest-p"></i></span> Pinterest</td>
                            <td>134,800</td>
                        </tr>
                        <tr>
                            <td><span className="text-linkedin"><i className="fa-brands fa-linkedin-in"></i></span> Linkedin</td>
                            <td>254,812</td>
                        </tr>
                        <tr>
                            <td><span className="text-twitter"><i className="fa-brands fa-twitter"></i></span> Twitter</td>
                            <td>124,250</td>
                        </tr>
                        <tr>
                            <td><span className="text-reddit"><i className="fa-brands fa-reddit"></i></span> Reddit</td>
                            <td>259,680</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default SocialVisitors