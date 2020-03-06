module.exports = {
  apps : [{
    name: 'Soap Calc',
    script: 'soap_calc_app.exe',

    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }]
};
