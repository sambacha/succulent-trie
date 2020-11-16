const bcrypt = require('bcrypt');

async function hashPassword(password) {
    return bcrypt.hash(password, 10);
}

async function checkPassword(password, hashedPassword) {
    return bcrypt.compare(password, hashedPassword);
}

module.exports = {
    hashPassword,
    checkPassword,
};
