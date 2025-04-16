import React from 'react'
import Footer from '../components/footer/Footer'
import NestedSortableList from '../components/sortable-list/NestedSortableList'
import NestedSortableHandle from '../components/sortable-list/NestedSortableHandle'
import NestableFolder from '../components/sortable-list/NestableFolder'
import NestableTeam from '../components/sortable-list/NestableTeam'

const NestableListMainContent = () => {
  return (
    <div className="main-content">
        <div className="dashboard-breadcrumb dashboard-panel-header mb-30">
            <h2>Nestable List</h2>
        </div>
        <div className="row">
            <NestedSortableList/>
            <NestedSortableHandle/>
            <NestableFolder/>
            <NestableTeam/>
        </div>

        <Footer/>
    </div>
  )
}

export default NestableListMainContent