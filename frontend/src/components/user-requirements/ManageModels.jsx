import React from 'react';

const ManageModels = ({ models, handleDelete, handleEdit }) => {
  return (
    <div>
      {models.length === 0 ? (
        <p>No models available</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Model</th>
              <th>PM</th>
              <th>Max Support</th>
              <th>IP</th>
              <th>PCI</th>
              <th>1U</th>
              <th>2U</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {models.map((model) => (
              <tr key={model._id}>
                <td>{model.model}</td>
                <td>{model.pm}</td>
                <td>{model.max_support || 'N/A'}</td>
                <td>{model.ip || 'N/A'}</td>
                <td>{model.pci || 'N/A'}</td>
                <td>{model['1u']}</td>
                <td>{model['2u']}</td>
                <td>
                  <button onClick={() => handleEdit(model._id)} className="edit-btn">Edit</button>
                  <button onClick={() => handleDelete(model._id)} className="delete-btn">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ManageModels;
