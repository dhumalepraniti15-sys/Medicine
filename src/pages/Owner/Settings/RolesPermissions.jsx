import "./Settings.css";
import { roles } from "./settingsData";
import { Users, Plus, Edit, Trash2 } from "lucide-react";

const RolesPermissions = () => {
  return (
    <div className="settings-card">

      <div className="settings-header">

        <div className="header-left">
          <Users size={24} />
          <div>
            <h2>Roles & Permissions</h2>
            <p>Manage user roles and access permissions</p>
          </div>
        </div>

        <button className="add-role-btn">
          <Plus size={18} />
          Add Role
        </button>

      </div>

      <div className="table-wrapper">

        <table className="role-table">

          <thead>
            <tr>
              <th>Role</th>
              <th>Total Users</th>
              <th>Permissions</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>

            {roles.map((role, index) => (

              <tr key={index}>

                <td>{role.role}</td>

                <td>{role.users}</td>

                <td>{role.access}</td>

                <td>
                  <span className="status-badge active">
                    Active
                  </span>
                </td>

                <td>

                  <div className="action-buttons">

                    <button className="edit-btn-small">
                      <Edit size={16} />
                    </button>

                    <button className="delete-btn-small">
                      <Trash2 size={16} />
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default RolesPermissions;