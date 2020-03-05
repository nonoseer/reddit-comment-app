module.exports = {
  extends: ['plugin:react/recommended', 'airbnb', 'airbnb/hooks', 'prettier'],
  parser: 'babel-eslint',
  plugins: ['react', 'prettier'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'import/no-named-as-default': 0,
    'react/prop-types': 0
  }
}
