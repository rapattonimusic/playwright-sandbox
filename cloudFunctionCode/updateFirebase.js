const admin = require('firebase-admin');
const { CloudBuildClient } = require('@google-cloud/cloudbuild');

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: 'https://playwright-sandbox-403213.firebaseio.com',
  projectId: 'playwright-sandbox-403213'
});

exports.updateFirebase = async (event, context) => {
  // Wait for 10 seconds
  await new Promise(resolve => setTimeout(resolve, 30000))
  const cbClient = new CloudBuildClient();
  const message = event.data
    ? JSON.parse(Buffer.from(event.data, 'base64').toString())
    : null;

  if (message) {
    const projectId = message.projectId
    const buildId = message.buildId;
    const environment = message.environment

    const [build] = await cbClient.getBuild({ projectId, id: buildId });

    if (build) {
      console.log(`BUILD_ID: ${build.id}`)
      console.log(`STATUS: ${build.status}`)
      console.log(`LOGS_URL: ${build.logUrl}`)
      console.log('About to update Firebase')

      switch (environment) {
        case 'staging':
          try {
            await admin.database().ref(`repos/${message.repo}`).update({
              staging: {
                id: build.id,
                status: build.status,
                startTime: build.startTime,
                finishTime: build.finishTime,
                logsUrl: build.logUrl,
              }
            });
            console.log(`Updated Firebase with latest build status`);
          } catch (error) {
            console.error('Error updating database: ', error);
          }
          break

        case 'production':
          try {
            await admin.database().ref(`repos/${message.repo}`).update({
              production: {
                id: build.id,
                status: build.status,
                startTime: build.startTime,
                finishTime: build.finishTime,
                logsUrl: build.logUrl,
              }
            });
            console.log(`Updated Firebase with latest build status`);
          } catch (error) {
            console.error('Error updating database: ', error);
          }
        break
      }
      
    } else {
      console.log('No build found with the provided ID');
    }
  } else {
    console.log('No message received.');
  }
};