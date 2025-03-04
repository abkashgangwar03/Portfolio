import { useState, useEffect } from "react";

export default function Typewriter() {
  const words = ["Ready to dive into new technologies.", "A Web and Mobile app Developer.", "Learning Data Science, ML and AI."];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const typingSpeed = 50;
  const deletingSpeed = 50;
  const pauseTime = 1000;

  useEffect(() => {
    const currentWord = words[index];

    if (isDeleting) {
      if (text.length > 0) {
        setTimeout(() => setText(text.slice(0, -1)), deletingSpeed);
      } else {
        setIsDeleting(false);
        setIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    } else {
      if (text.length < currentWord.length) {
        setTimeout(() => setText(currentWord.slice(0, text.length + 1)), typingSpeed);
      } else {
        setTimeout(() => setIsDeleting(true), pauseTime);
      }
    }
  }, [text, isDeleting]);

  return (
    <h1 className="font-extrabold pb-3 w-[90vw] lg:w-[70vw] md:w-[80vw] text-4xl md:text-6xl brightness-175 text-transparent bg-clip-text bg-gradient-to-r from-neutral-600 to-neutral-600 via-textcolor">
      {text}
    </h1>
  );
}
