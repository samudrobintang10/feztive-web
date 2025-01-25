import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CircularProgress } from "@mui/material";

// The default of this button elements is isPrimary and isNormal
// There are three types of size: isSmall, isNormal (Default), and isBig
// There are two types of button type: isPrimary (Default) and isSecondary
// There are x types of color: isMusicJazz (Default) etc
// isGradient is used for gradient the color to exact type
// Use icon if icon is needed, of course paste the icon

function Button({
  href,
  placeholder,
  isSecondary,
  isPurple,
  isOrange,
  isRed,
  isWhite,
  isBlue,
  isSmall,
  isMedium,
  isBig,
  isGradient,
  icon,
  isSubmit,
  isDisabled,
  isLoading,
  onClick,
}) {
  const canvas = ["rounded flex gap-x-3 items-center justify-center"];
  const brush = [];
  const font = ["font-semibold"];

  // Button size
  if (isSmall) {
    canvas.push("py-2 px-[22px]");
  } else if (isBig) {
    canvas.push("py-4 px-8 w-full");
    font.push("lg:text-xl text-xs");
    // implement on further progress
  } else if (isMedium) {
    canvas.push("py-4 px-8 w-full");
    font.push("text-sm");
  } else {
    canvas.push("py-4 px-8");
    font.push("lg:text-lg text-xs");
  }

  if (isDisabled) {
    brush.push("bg-primary-grey");
    font.push("text-white");
  }
  // Button type with extended on color
  if (isSecondary) {
    brush.push("outline outline-1");
    if (isPurple) {
      brush.push("outline-primary-purple text-primary-purple");
      font.push("text-primary-purple");
    } else if (isWhite) {
      brush.push("outline-white text-white");
      font.push("text-white");
    } else {
      brush.push("outline-primary-music-jazz");
      font.push("text-primary-music-jazz");
    }
  } else {
    // The filled button is always has white color font
    font.push("text-primary-white");
    if (isPurple) {
      brush.push("bg-primary-purple");
    } else if (isOrange) {
      brush.push("bg-primary-orange");
    } else if (isRed) {
      brush.push("bg-primary-red");
    } else if (isBlue) brush.push("bg-tertiary-blue");
    else {
      if (isGradient) {
        brush.push(
          "bg-gradient-to-r from-primary-music-jazz to-primary-light-orange"
        );
      } else {
        brush.push("bg-primary-music-jazz");
      }
    }
  }

  if (href) {
    return (
      <Link to={href}>
        <button
          className={canvas.join(" ").concat(" ", brush.join(" "))}
          type={isSubmit}
          disabled={isDisabled}
        >
          <h5 className={font.join(" ")}>{placeholder}</h5>
          <FontAwesomeIcon icon={icon} className="text-primary-white" />
        </button>
      </Link>
    );
  }

  return (
    <button
      className={canvas.join(" ").concat(" ", brush.join(" "))}
      type={isSubmit}
      onClick={onClick}
      disabled={isDisabled}
    >
      {!isLoading && (
        <div className="placeholder-button">
          <h6 className={font.join(" ")}>{placeholder}</h6>
          <FontAwesomeIcon icon={icon} className="text-primary-white" />
        </div>
      )}
      {isLoading && <CircularProgress sx={{ color: "white" }} size={28} />}
    </button>
  );
}

export default Button;
