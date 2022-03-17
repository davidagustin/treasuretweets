interface Button {
  buttonText: string;
  handleClick: any;
};

export default function Button({ buttonText, handleClick }: Button) {
    return (
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => handleClick()}>
        {buttonText}
      </button>
    )
}
  