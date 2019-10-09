const db = require('../data/db-config.js');

module.exports = {
    find,
    findById,
    findPostById,
    add
}

function find() {
    return db('users');
}

function findById(id) {
    return db('users').where({ id }).first();
}

function findPostById(userId) {
    return db('posts')
    .join('users', 'users.id', '=', 'posts.user_id')
    .select('posts.id', 'posts.contents', 'users.username')
    .where({ user_id: userId });
}
function add(user) {
    return db('users').insert(user, 'id');
}