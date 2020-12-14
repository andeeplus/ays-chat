import { useEffect, useRef, useState } from 'react'
import socketIOClient from 'socket.io-client'
import { getIsoString, ISOtoLongDate } from '../utils/chat'

const NEW_CHAT_MESSAGE_EVENT = 'newChatMessage'
const NEW_USER_CONNECTED_EVENT = 'newUserConnected'
const PREVIOUS_MESSAGES_REQUEST_EVENT = 'previousMessagesRequest'
const NEW_CHAT_SET_TOPIC_EVENT = 'setTopic'

const SOCKET_SERVER_URL =
  process.env.NODE_ENV !== 'development'
    ? 'http://localhost:4000'
    : 'https://radio.armyoursampler.com'

const useChat = (roomId, name) => {
  const [messages, setMessages] = useState([])
  const [topic, setTopic] = useState('')

  const [connectedUsers, setConnectedUsers] = useState([])
  const username = useRef(name)
  const socketRef = useRef()

  useEffect(() => {
    socketRef.current = socketIOClient(SOCKET_SERVER_URL, {
      path: '/api/socket.io',
      query: { roomId, username: username.current },
      transports: ['websocket'],
    })

    socketRef.current.on(PREVIOUS_MESSAGES_REQUEST_EVENT, (backupMsg) => {
      if (backupMsg) {
        if (!messages.length) setMessages(backupMsg)
        else setMessages((messages) => [...backupMsg, ...messages])
      }
    })

    socketRef.current.on(NEW_CHAT_SET_TOPIC_EVENT, ({ topic: newTopic }) => {
      setTopic(newTopic)
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

  useEffect(() => {})

  const sendMessage = (messageBody) => {
    socketRef.current.emit(NEW_CHAT_MESSAGE_EVENT, {
      body: messageBody,
      senderId: socketRef.current.id,
      timestamp: ISOtoLongDate(getIsoString(), 'it-IT'),
    })
  }

  const requestSetTopic = (topic) => {
    socketRef.current.emit(NEW_CHAT_SET_TOPIC_EVENT, topic)
  }

  return { messages, topic, sendMessage, requestSetTopic, connectedUsers }
}

export default useChat
