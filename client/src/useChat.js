import { useEffect, useRef, useState } from 'react'
import socketIOClient from 'socket.io-client'

const NEW_CHAT_MESSAGE_EVENT = 'newChatMessage'
const NEW_USER_CONNECTED_EVENT = 'newUserConnected'
const LATEST_50MSG_EVENT = 'Latest50msg'

const SOCKET_SERVER_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:4000'
    : 'https://radio.armyoursampler.com/api'

const useChat = (roomId, name) => {
  const [messages, setMessages] = useState([])
  const [connectedUsers, setConnectedUsers] = useState([])
  const username = useRef(name)
  const socketRef = useRef()

  useEffect(() => {
    socketRef.current = socketIOClient(SOCKET_SERVER_URL, {
      query: { roomId, username: username.current },
    })

    socketRef.current.on(LATEST_50MSG_EVENT, (backupMsg) => {
      if (backupMsg) {
        if (!messages.length) setMessages(backupMsg)
        else setMessages((messages) => [...backupMsg, ...messages])
      }
    })

    socketRef.current.on(NEW_CHAT_MESSAGE_EVENT, (message) => {
      const incomingMessage = {
        ...message,
        ownedByCurrentUser: message.senderId === socketRef.current.id,
      }
      setMessages((messages) => [...messages, incomingMessage])
    })

    socketRef.current.on(NEW_USER_CONNECTED_EVENT, (users) => {
      setConnectedUsers(users[roomId])
    })

    return () => {
      socketRef.current.disconnect()
    }
    // eslint-disable-next-line
  }, [roomId, username])

  const sendMessage = (messageBody) => {
    socketRef.current.emit(NEW_CHAT_MESSAGE_EVENT, {
      body: messageBody,
      senderId: socketRef.current.id,
    })
  }

  return { messages, sendMessage, connectedUsers }
}

export default useChat
