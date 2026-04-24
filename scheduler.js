const cron = require('node-cron');
const { exec } = require('child_process');

// Runs every day at 9:00 AM
cron.schedule('0 9 * * *', () => {
  console.log('⏰ Running Login Test at 9:00 AM - scheduler.js:6');

  exec('npx playwright test', (error, stdout, stderr) => {
    if (error) {
      console.error(`❌ Error: ${error.message} - scheduler.js:10`);
      return;
    }
    if (stderr) {
      console.error(`⚠️ Stderr: ${stderr} - scheduler.js:14`);
    }
    console.log(`✅ Output:\n${stdout} - scheduler.js:16`);
  });
});