import io from 'socket.io-client'
import baseUrl from './base-url'

let socket = io(baseUrl)

export function openSocket () {
  socket = socket.open()
  return socket
}

export function closeSocket () {
  socket = socket.close()
  return socket
}

export default socket
