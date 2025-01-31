"use client";

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const PromptCard = ({ post, handleTagClick, handleEdit, handleDelet }) => {
  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();

  const [copied, setCopied] = useState("");

  const handleCopy = () => {
    setCopied(post.prompt);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(() => setCopied(""), 3000);
  };

  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div className="flex-1 flex justify-center items-center gap-3 cursor-pointer">
          <Image
            src={post.creator.photo}
            alt="user_image"
            width={25}
            height={25}
            className=" rounded-full object-contain "
          />
          <div className="fex flex-col">
            <h3 className="font-satoshi font-semibold text-gray-800">
              {post.creator.username}{" "}
            </h3>
            <p>{post.creator.email}</p>
          </div>
        </div>
        <div className="copy_btn" onClick={handleCopy}>
          <Image
            src={
              copied === post.prompt
                ? "assets/icons/tick.svg"
                : "assets/icons/copy.svg"
            }
            alt="copy prompt"
            width={16}
            height={16}
          />
        </div>
      </div>
      <p className="my-4 font-satoshi text-sm text-gray-700">{post.prompt}</p>
      <p
        className="font-inter text-sm blue_gradient cursor-pointer"
        onClick={() => handleTagClick && handleTagClick(post.tag)}
      >
        {post.tag}
      </p>

      {session?.user.id === post.creator._id && pathName === "/myprofile" && (
        <div className="  flex-center mt-5 gap-4 pt-3">
          <p 
          className="font-inter text-sm px-2 py-1 text-white bg-gray-500 rounded-md cursor-pointer"
          onClick={handleEdit}
          >
            Edit
          </p>
          <p 
          className="font-inter text-sm px-2 py-1 text-white bg-red-500 rounded-md cursor-pointer"
          onClick={handleDelet}
          >
            Delet
          </p>
        </div>
        
      )}
    </div>
  );
};

export default PromptCard;
