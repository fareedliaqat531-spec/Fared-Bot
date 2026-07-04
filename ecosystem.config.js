module.exports = {
  apps : [{
    name: "@USMAN_TECH_MD_BOT",
    script: "./server.js",
    watch: false,
    autorestart: true,
    max_memory_restart: '2G',
    env: {
      NODE_ENV: "production",
    }
  }]
};
