export default function TextArea() {
  return (
    <div className="mb-3 xl:w-96">
        <textarea
        className="
            form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-white-700
            bg-black bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            max-h-64
            focus:text-white-700 focus:bg-black focus:border-blue-600 focus:outline-none
        "
        rows={3}
        placeholder="What's happening?"
        ></textarea>
    </div>
  )
}
