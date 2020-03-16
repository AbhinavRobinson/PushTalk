import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
admin.initializeApp();

const db = admin.firestore();

export const archiveChat = functions.firestore
  .document("chats/{chatId}")
  .onUpdate(change => {
    const data = change.after.data();

    const maxLen = 100;
    // Object is possibly 'undefined'.ts(2532)
    // added "?"
    const msgLen = data?.messages.length;
    const charLen = JSON.stringify(data).length;

    const batch = db.batch();

    if (charLen >= 10000 || msgLen >= maxLen) {

      // Always delete at least 1 message
      const deleteCount = msgLen - maxLen <= 0 ? 1 : msgLen - maxLen
      // Object is possibly 'undefined'.ts(2532)
      // added "?"
      data?.messages.splice(0, deleteCount);

      const ref = db.collection("chats").doc(change.after.id);

      batch.set(ref, data, { merge: true });

      return batch.commit();
    } else {
      return null;
    }
  });
