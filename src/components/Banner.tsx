import { modalState, movieState } from "@/atom/modalAtom";
import { baseUrl } from "@/constant/url";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import { Movie } from "global";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { useRecoilState } from "recoil";
interface Props {
  netflixOriginals: Movie[];
}

const Banner = ({ netflixOriginals }: Props) => {
  const [banner, setBanner] = useState<Movie | null>(null);
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);
  const [showModal, setShowModal] = useRecoilState(modalState);

  useEffect(() => {
    setBanner(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    );
  }, [netflixOriginals]);
  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
        <Image
          src={`${baseUrl}${banner?.backdrop_path || banner?.poster_path}`}
          alt="movie_banner"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <h1 className="text-2xl lg:text-7xl">
        {banner?.title || banner?.name || banner?.original_name}
      </h1>
      <p className="max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2x lg:text-2xl text-shadow-md">
        {banner?.overview}
      </p>
      <div className="flex space-x-3">
        <button className="bannerButton bg-white text-black">
          <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7" />
          Play
        </button>
        <button
          className="bannerButton bg-gray-700"
          onClick={() => {
            setCurrentMovie(banner);
            setShowModal(true);
          }}
        >
          MoreInfo
          <InformationCircleIcon className="h-5 w-5 md:h-8 md:w-8" />
        </button>
      </div>
    </div>
  );
};

export default Banner;
