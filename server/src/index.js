const server = require('http').createServer()
const io = require('socket.io')(server, { path: '/api/socket.io' })

const PORT = 4000
const NEW_CHAT_MESSAGE_EVENT = 'newChatMessage'
const NEW_USER_CONNECTED_EVENT = 'newUserConnected'
const NEW_CHAT_SET_TOPIC_EVENT = 'setTopic'
const PREVIOUS_MESSAGES_REQUEST_EVENT = 'previousMessagesRequest'

const connectedUsers = {}
const previousMessages = {}
const previousTopics = {}

io.on('connection', (socket) => {
  console.log(`Client ${socket.id} connected`)

  // Join a conversation
  const { roomId, username } = socket.handshake.query

  if (!connectedUsers[roomId]) connectedUsers[roomId] = []
  if (!previousMessages[roomId]) previousMessages[roomId] = []

  const newUser = { username, socketId: socket.id }
  connectedUsers[roomId].push(newUser)
  socket.join(roomId)

  io.in(roomId).emit(NEW_USER_CONNECTED_EVENT, connectedUsers)

  if (previousMessages[roomId].length) {
    io.to(socket.id).emit(
      PREVIOUS_MESSAGES_REQUEST_EVENT,
      previousMessages[roomId],
    )
  }

  if (previousTopics[roomId]) {
    io.to(socket.id).emit(NEW_CHAT_SET_TOPIC_EVENT, previousTopics[roomId])
  }

  socket.on(NEW_CHAT_MESSAGE_EVENT, (data) => {
    previousMessages[roomId].push({ ...data, username })
    io.in(roomId).emit(NEW_CHAT_MESSAGE_EVENT, { ...data, username })
  })

  socket.on(NEW_CHAT_SET_TOPIC_EVENT, (topic) => {
    console.log(`New topic has been set in Room: ${roomId} ${topic.topic}`)
    previousTopics[roomId] = topic
    io.in(roomId).emit(NEW_CHAT_SET_TOPIC_EVENT, topic)
  })

  socket.on('disconnect', () => {
    console.log(`Client ${socket.id} diconnected`)
    connectedUsers[roomId] = connectedUsers[roomId].filter(
      ({ socketId }) => socketId !== socket.id,
    )
    io.in(roomId).emit(NEW_USER_CONNECTED_EVENT, connectedUsers)

    if (!connectedUsers[roomId].length) {
      delete previousMessages[roomId]
    }
    socket.leave(roomId)
  })
})

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
