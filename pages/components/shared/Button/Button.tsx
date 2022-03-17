export default function Button({ buttonText, handleClick }) {
    return (
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full" onClick={(event) => handleClick(event)}>
        {buttonText}
      </button>
    )
}
  