// Company Profile Data

export const companyProfile = {

    hospitalName: "City Care Hospital",

    email: "info@citycare.com",

    phone: "+1 555 987 6543",

    address: "New York, USA",

    registrationNo: "HOSP-2026-001",

    established: "2010"

};




// System Settings Data

export const systemSettings = {

    hospitalCode: "CCH001",

    currency: "USD",

    timezone: "America/New_York",

    language: "English",

    dateFormat: "MM/DD/YYYY",

    backupEnabled: true

};




// Roles & Permissions Data

export const roles = [

    {
        id:1,
        name:"Owner",
        permissions:[
            "Dashboard",
            "Financial Ledger",
            "Reports",
            "Payroll",
            "Settings"
        ]
    },


    {
        id:2,
        name:"Admin",
        permissions:[
            "Manage Users",
            "Manage Staff",
            "Reports"
        ]
    },


    {
        id:3,
        name:"Worker",
        permissions:[
            "Patient Records",
            "Pharmacy",
            "Appointments"
        ]
    }

];




// Security Data

export const securitySettings = {

    twoFactorAuth:true,

    loginAlerts:true,

    passwordExpiry:"90 Days"

};




// Backup Data

export const backups = [

    {
        id:1,
        date:"26 July 2026",
        size:"1.8 GB",
        type:"Automatic",
        status:"Completed"
    },


    {
        id:2,
        date:"20 July 2026",
        size:"1.5 GB",
        type:"Manual",
        status:"Completed"
    },


    {
        id:3,
        date:"15 July 2026",
        size:"1.2 GB",
        type:"Cloud",
        status:"Completed"
    }


];