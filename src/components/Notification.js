const Notification = ({ notification, setNotification }) => {
  if (notification) {
    setTimeout(() => {
      setNotification(null)
    }, 5000)
  }

  return (
    <div>
      <p>{notification}</p>
    </div>
  )
}

export default Notification