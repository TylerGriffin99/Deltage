import io from 'socket.io-client'

let socket = io('https://deltage.herokuapp.com/')

export function openSocket () {
  socket = socket.open()
  return socket
}

export function closeSocket () {
  socket = socket.close()
  return socket
}

export default socket
