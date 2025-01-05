import React from "react";

const EntryPage = ({ onClick }) => {
  return (
    <div className="text-center flex flex-col justify-center items-center">
      <p className="font-bold w-2/3 p-3">
        Take on this fun 10-question trivia quiz and see how many you can get
        right. Ready to find out your final score at the end? Let’s get started!
      </p>
      <button className=" font-bold w-1/4 border rounded-2xl border-[#46A57D] hover:bg-[#46A57D] p-3" onClick={onClick}>
        Start Game
      </button>
    </div>
  );
};

export default EntryPage;
