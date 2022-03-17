export default function MessageCard({ message, handleDelete, index }) {
  return (
    <div>
      { message }
      <div onClick={() => handleDelete(index)}>Delete</div>
    </div>
  )
}
