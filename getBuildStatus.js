const { CloudBuildClient } = require('@google-cloud/cloudbuild');

async function getBuildStatus() {
  const cbClient = new CloudBuildClient()
  const [build] = await cbClient.getBuild({ projectId: 'playwright-sandbox-403213', id: 'ae47f627-f993-4d55-abb4-b8e5a52fbdcb' });
  console.log(build.status);
}

getBuildStatus().catch(console.error)

// exports.updateFirebase = async (event, context) => {
//   const cbClient = new CloudBuildClient();
//   const message = event.data
//     ? JSON.parse(Buffer.from(event.data, 'base64').toString())
//     : null;

//   if (message) {
//     const projectId = message.projectId
//     const buildId = message.buildId;

//     const [build] = await cbClient.getBuild({ projectId, id: buildId });

//     if (build) {
//       try {
//         // Wait for 10 seconds
//         await new Promise(resolve => setTimeout(resolve, 10000))
//         await admin.database().ref(`repos/${message.repo}`).update({ 
//           id: build.id,
//           status: build.status,
//           startTime: build.startTime,
//           finishTime: build.finishTime,
//           logsUrl: build.logUrl,
//         });
//         console.log(`Updated Firebase with latest build status`);
//       } catch (error) {
//         console.error('Error updating database: ', error);
//       }
//     } else {
//       console.log('No build found with the provided ID');
//     }
//   } else {
//     console.log('No message received.');
//   }
// };