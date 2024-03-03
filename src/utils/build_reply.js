export function buildReplyTree(replies) {
  if (!Array.isArray(replies)) {
    console.error('replies is not an array:', replies);
    return [];
  }

  const replyMap = new Map();

  replies.forEach((reply) => {
    replyMap.set(reply.id, {
      ...reply,
      children: []
    });
  });

  const rootReplies = [];

  replyMap.forEach((reply, id) => {
    if (reply.reply_id) {
      const parent = replyMap.get(reply.reply_id);
      if (parent) {
        parent.children.push(reply);
      }
    } else {
      rootReplies.push(reply);
    }
  });

  return rootReplies;
}
