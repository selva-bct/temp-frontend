const constant = {
  host: process.env.HOST || 'http://localhost',
  apiHost: process.env.API_HOST || 'http://localhost',
  port: process.env.PORT || '3000',
  apiPort: process.env.API_PORT || '4000',
  hostRootUrl: `${process.env.HOST}:/${process.env.PORT}`,
  apiRootUrl: ()=> {
    let result = `${process.env.API_HOST}:/${process.env.API_PORT}/api`
    if (!process.env.API_HOST) {
      result = 'http://localhost:4000/api'
    }
    return result
  },
  login: '/auth/login',
  register: '/auth/register',
  logout: '/auth/logout',
  changePassword: '/auth/change-password',
  forgotPassword: '/auth/forgot-password',
  dashboard: '/dashboard'
}

export default constant