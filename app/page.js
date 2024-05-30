'use client'

export default function Home() {
  return (
    <>
     <div className="flex flex-col h-[44vh] text-white items-center justify-center gap-4">
      <div className="text-5xl font-bold flex gap-3">Buy me a chai<span><img className="w-14"src="/coffee-lover.gif" alt=""/></span></div>
      <p>A Crowdfund platform for creators. Get funded by your fans and follower's. Start Now !</p>
      <div>
      <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
      <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Learn More</button>
      </div>
    </div>
    <div className="bg-white opacity-10 h-1"></div>

    <div className="text-white container mx-auto py-5">
      <h1 className="text-center font-bold text-xl my-4">Your fans can buy you a chai</h1>
      <div className="flex gap-5 justify-around">
          <div className="item space-y-3 flex flex-col justify-center items-center">
              <img className="rounded-full w-32 p-2" src="/peach-goma-peach-and-goma.gif"/>
              <p className="font-bold">Fund yourself</p>
              <p>Your fans are available for your help</p>
          </div>
          <div className="item space-y-3 flex flex-col justify-center items-center">
              <img className="rounded-full w-32 p-2" src="/money.gif"/>
              <p className="font-bold">Fund yourself</p>
              <p>Your fans are available for your help</p>
          </div>
          <div className="item space-y-3 flex flex-col justify-center items-center">
              <img className="rounded-full w-32 p-2" src="/friends-team.gif"/>
              <p className="font-bold">Fans want to help</p>
              <p>Your fans are available for your help</p>
          </div>
      </div>
    </div>

    <div className="bg-white opacity-10 h-1"></div>

    <div className="text-white container mx-auto flex flex-col justify-center items-center py-5">
      <h1 className="text-center font-bold text-xl my-4">Learn More about us...</h1>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/QtaorVNAwbI?si=xJhKtgYMPMY8UO7S" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
    </>
  );
}
