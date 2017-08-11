module.exports = {
    'env': {
        'browser': true,
        'es6': true,
        'commonjs': true,
    },
    'extends': 'eslint:recommended',
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'sourceType': 'module'
    },
    'plugins': ['react'],
}
