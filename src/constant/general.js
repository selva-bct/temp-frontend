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
  login: '/users/login',
  register: '/users',
  logout: '/users/logout',
  changePassword: '/users/change-password',
  forgotPassword: '/users/forgot-password',
  resetPassword: '/users/reset-password',
  dashboard: '/dashboard',
  inviteUser: '/users/invite'
}

export default constant