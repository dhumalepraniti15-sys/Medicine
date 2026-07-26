import React from "react";
import {
  Settings,
  Building2,
  Shield,
  Users,
  Database,
  ArrowRight
} from "lucide-react";

import "./Settings.css";

const settingsModules = [
  {
    title: "Company Profile",
    description: "Manage hospital information, address, logo and contact details.",
    icon: <Building2 size={32} />
  },
  {
    title: "System Settings",
    description: "Configure application preferences and general system options.",
    icon: <Settings size={32} />
  },
  {
    title: "Security",
    description: "Manage passwords, authentication and security policies.",
    icon: <Shield size={32} />
  },
  {
    title: "Roles & Permissions",
    description: "Control user roles and access permissions.",
    icon: <Users size={32} />
  },
  {
    title: "Backup",
    description: "Create and restore database backups safely.",
    icon: <Database size={32} />
  }
];

const SettingsPage = () => {
  return (
    <div className="settings-page">

      <div className="settings-header">
        <h1>⚙ Settings</h1>
        <p>
          Configure your Medical Management System from one place.
        </p>
      </div>

      <div className="settings-grid">

        {settingsModules.map((item, index) => (

          <div className="settings-card" key={index}>

            <div className="settings-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.description}</p>

            <button>
              Open 
            </button>

          </div>

        ))}

      </div>

    </div>
  );
};

export default SettingsPage;