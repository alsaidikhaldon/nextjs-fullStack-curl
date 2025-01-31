import Link from "next/link";

const Form = ({ type, post, setpost, submitting, handleSubmit }) => {
  return (
    <section className="w-full flex-start flex-col ">
      <h3 className="  text-center text-3xl font-semibold ">{type} Post</h3>
      <p className=" desc text-left max-w-md">
        {type} and share prompt with the world
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism "
      >
        <label>
          <span className=" font-semibold">Your AI Prompt</span>
          <textarea
            value={post.prompt}
            onChange={(e) =>
              setpost({
                ...post,
                prompt: e.target.value,
              })
            }
            placeholder="Write your prompt "
            required
            className="form_textarea"
          />
        </label>

        <label>
          <span className=" font-semibold">Prompt tag </span>
          <textarea
            value={post.tag}
            onChange={(e) =>
              setpost({
                ...post,
                tag: e.target.value,
              })
            }
            placeholder=" Example : #product, #webdevelopement, #webdesign, #html "
            required
            className="form_textarea"
          />
        </label>
        <div className="flex-end mx-3 mb-5 gap-4 ">
          <Link href={"/"} className="text-red-500">
            cancel
          </Link>

          <button
            type="submit"
            disabled={submitting}
            className=" px-5 py-1.5 text-sm bg-green-600 rounded-full text-white"
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
