"use client";

import PromptCard from "./PromptCard";

const Profile = ({ name, desc, data, handleEdit, handleDelet }) => {
  return (
    <section className="w-full">
      <h1 className="font-bold text-left  text-4xl"> {name} Profile </h1>
      <p className="  desc text-left">{desc} </p>
     

      <div className="mt-4 prompt_layout">
        {data.map((post) => (
         
          <PromptCard
            key={post._id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelet={() => handleDelet && handleDelet(post)}
          />
          
        ))}
      </div>
    </section>
  );
};

export default Profile;
