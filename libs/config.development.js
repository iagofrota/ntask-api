module.exports = {
    database: 'ntask',
    username: '',
    passsword: '',
    params: {
        dialect: 'sqlite',
        storage: 'ntask.sqlite',
        define: {
            underscored: true
        }
    },
    jwtSecret: 'Nta$k-AP1',
    jwtSession: {
        session: false
    }
};