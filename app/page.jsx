import Feed from "@components/Feed"
const Home = () => {
  return (
    <section className="w-full flex-center flex-col ">
    <h1 className=" head_text text-center ">Discover & Share
      <br/>
    <span className="text-green-600 text-center ">AI-Powerd Prompts</span>
    </h1>
    <p className="desc text-center">
      Prompts is an open-source AI prompting tools for create and share prompts
    </p>
    <Feed />
    </section>
  )
}

export default Home;