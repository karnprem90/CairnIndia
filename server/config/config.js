module.exports = {
    server: {
        
            host: '127.0.0.1',
            port: 8001
    },
    database: {
        url: 'mongodb://127.0.0.1/Cairn-db'
    },
    key: {
        privateKey: '37LvDSm4XvjYOh9Y',
        tokenExpiry: 1 * 30 * 1000 * 60 //1 hour
    },
    email: {
        username: "cairnIndiatest@gmail.com",
        password: "cronj123",
        accountName: "Cairn India",
        verifyEmailUrl: "verifyMail"
    },
    url: "http://localhost:8001/#/"
};

// {username : "test1234",firstName : "Sushant",lastName : "Kumar",email : "sushant@cronj.com",password : "56426fbf73b3af63",scope : "Admin",isEmailVerified : true,isActive : true}