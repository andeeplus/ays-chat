const checkPrevMessageSameUser = (messages, i) => {
  return messages[i - 1] && messages[i - 1].username === messages[i].username
}

const isSameUser = (message, username) => {
  return message.ownedByCurrentUser || message.username === username
}

const getDisplayTimestamp = (messages, i) => {

  if (messages[i - 1]) {
    const [prevH, prevM] = messages[i - 1].timestamp.split(':')
    const [h, m] = messages[i].timestamp.split(':')
    const isSameMinute = prevM === m
    return isSameMinute ? 'none' : 'block'
  }
  return 'block'
}

export { checkPrevMessageSameUser, isSameUser, getDisplayTimestamp }
