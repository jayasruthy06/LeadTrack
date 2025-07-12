import cron from 'node-cron';
import Meeting from '../models/Meeting.js';

//auto cleanup of meetings old than 2 days

const deleteOldMeetings = async () => {
  try {
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - 1);
    const result = await Meeting.deleteMany({
      meetingDateTime: { $lt: cutoffDate } 
    });

    console.log(`[Meeting Cleanup] Deleted ${result.deletedCount} old meetings before ${cutoffDate.toISOString()}.`);
  } catch (error) {
    console.error('[Meeting Cleanup] Error deleting old meetings:', error);
  }
};

const startMeetingCleanupJob = () => {
  cron.schedule('0 2 * * *', deleteOldMeetings, {
    scheduled: true,
    timezone: "Asia/Kolkata" 
  });
  console.log('Meeting cleanup job scheduled to run daily at 2 AM IST.');
};

export default startMeetingCleanupJob;
