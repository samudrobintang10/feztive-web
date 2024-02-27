import { Link } from "react-router-dom";

// The default of this button elements is isPrimary and isNormal
// There are three types of size: isSmall, isNormal (Default), and isBig
// There are two types of button type: isPrimary (Default) and isSecondary
// There are x types of color: isMusicJazz (Default) etc

function Button({ href, placeholder, isSecondary, isPurple, isSmall, isBig }) {
  const canvas = ["rounded"];
  const brush = [];
  const font = [];

  // Button size
  if (isSmall) {
    canvas.push("py-2 px-[22px]");
  } else if (isBig) {
    canvas.push();
    // implement on further progress
  } else {
    canvas.push("py-4 px-8");
    font.push("text-lg")
  }

  // Button type with extended on color
  if (isSecondary) {
    brush.push("outline outline-1");
    if (isPurple) {
      brush.push("outline-primary-purple text-primary-purple");
    } else {
      brush.push("outline-primary-music-jazz text-primary-music-jazz");
    }
  } else {
    if (isPurple) {
      brush.push("bg-primary-purple text-primary-white");
    } else {
      brush.push("bg-primary-music-jazz text-primary-white");
    }
  }

  return (
    <Link to={href}>
      <button className={canvas.join(" ").concat(" ", brush.join(" "))}>
        <h5 className={font.join(" ")}>{placeholder}</h5>
      </button>
    </Link>
  );
}

export default Button;
