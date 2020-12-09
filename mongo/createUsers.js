db = db.getSiblingDB('admin')
db.createUser(
    {
        user: "myUserAdmin",
        pwd: "Password", // or cleartext password
        roles: [{ role: "userAdminAnyDatabase", db: "admin" }, "readWriteAnyDatabase"]
    }
)
db.createUser(
    {
        user: "coturn",
        pwd: "coturn", // or cleartext password
        roles: [{ role: "dbAdmin", db: "coturn" }]
    }
)