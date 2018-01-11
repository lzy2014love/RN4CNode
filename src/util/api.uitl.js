import { apiHost } from '../config'
const api = {
  topics: `${apiHost}/topics`, // 主题首页
  topic: `${apiHost}/topic`, // 主题详情
  reply2topic: `${apiHost}/topic`,
  addCollect: `${apiHost}/topic_collect/collect`,
  delCollect: `${apiHost}/topic_collect/de_collect`,
  userCollect: `${apiHost}/topic_collect`,
  agreeReply: `${apiHost}/reply`,

  authorize: `${apiHost}/accesstoken`,
  user: `${apiHost}/user`,
  messages: `${apiHost}/messages`,
  messageCount: `${apiHost}/message/count`,
  markAllMessage: `${apiHost}/message/mark_all`
}

export default api
