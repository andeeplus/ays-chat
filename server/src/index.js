const server = require('http').createServer()
const io = require('socket.io')(server, { path: '/api/socket.io' })

const PORT = 4000
const NEW_CHAT_MESSAGE_EVENT = 'newChatMessage'
const NEW_USER_CONNECTED_EVENT = 'newUserConnected'
const LATEST_50MSG_EVENT = 'Latest50msg'

const connectedUsers = {}
const previousMessages = {}

io.on('connection', (socket) => {
  console.log(`Client ${socket.id} connected`)

  // Join a conversation
  const { roomId, username } = socket.handshake.query

  if (!connectedUsers[roomId]) connectedUsers[roomId] = []
  if (!previousMessages[roomId]) previousMessages[roomId] = []

  const newUser = { username, socketId: socket.id }
  connectedUsers[roomId].push(newUser)
  socket.join(roomId)

  // Inform User about new login
  io.in(roomId).emit(NEW_USER_CONNECTED_EVENT, connectedUsers)

  // Send latest messages
  if (previousMessages[roomId].length) {
    socket.emit(LATEST_50MSG_EVENT, previousMessages[roomId])
  }

  // Listen for new messages
  socket.on(NEW_CHAT_MESSAGE_EVENT, (data) => {
    previousMessages[roomId].push({ ...data, username })
    io.in(roomId).emit(NEW_CHAT_MESSAGE_EVENT, { ...data, username })
  })

  // Leave the room if the user closes the socket
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
