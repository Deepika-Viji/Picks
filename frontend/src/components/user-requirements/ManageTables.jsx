import React from 'react';

const ManageTables = ({ tables, handleDelete, handleEdit }) => {
  return (
    <div>
      {tables.length === 0 ? (
        <p>No tables available</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Model</th>
              <th>Product Type</th>
              <th>Resolution</th>
              <th>Bitrate</th>
              <th>Framerate</th>
              <th>RM</th>
              <th>MEM</th>
              <th>CPU</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tables.map((table) => (
              <tr key={table._id}>
                <td>{table.Model}</td>
                <td>{table['Product Type']}</td>
                <td>{table.Resolution}</td>
                <td>{table.Bitrate}</td>
                <td>{table.Framerate}</td>
                <td>{table.RM}</td>
                <td>{table.MEM}</td>
                <td>{table.CPU}</td>
                <td>
                  <button onClick={() => handleEdit(table._id)} className="edit-btn">Edit</button>
                  <button onClick={() => handleDelete(table._id)} className="delete-btn">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ManageTables;
