export default process.env.NODE_ENV === 'production'
? 'https://deltage.herokuapp.com'
: 'http://localhost:3000/'
