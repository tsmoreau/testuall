import React, { useState } from "react";
import Account from "../Utils/Account";
import Logo from "./Logo";
import Switcher from "../Utils/ThemeSwitcher";
import useEagerConnect from "../../hooks/useEagerConnect";
import { useWeb3React } from "@web3-react/core";
import { Popover } from "@headlessui/react";
import Alert from "./Alert";

function SourceDropdown() {
  return (
    <div className="text-xl mx-2 text-base text-th-primary-dark">
      <Popover className="relative">
        <Popover.Button className="font-thin tracking-wide  w-full text-left  text-xl flex items-center transition ease-in-out hover:-translate-y-0.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="13"
            viewBox="0 0 24 24"
            className="mx-1 mt-0.5 text-cyan-300"
            stroke="#A8202C"
            fill="#A8202C"
            stroke-width="1"
          >
            <path d="M22 2v20h-20v-20h20zm2-2h-24v24h24v-24z" />
          </svg>
          Source
        </Popover.Button>

        <Popover.Panel className="font-thin tracking-wide  rounded text-xl z-40 w-48 -translate-x-0  translate-y-3 border absolute z-10 bg-th-background">
          <div className="flex flex-col">
            <a
              className="w-full py-4 hover:bg-th-primary-light "
              href="/source/#shop"
            >
              Shop
            </a>

            <a
              className="w-full py-4 hover:bg-th-primary-light "
              href="/source/#tokens"
            >
              Tokens
            </a>
            <a
              className="w-full py-4 hover:bg-th-primary-light "
              href="/source/#downloads"
            >
              Downloads
            </a>
          </div>
        </Popover.Panel>
      </Popover>
    </div>
  );
}

function PulseDropdown() {
  return (
    <div className="font-thin tracking-wide  text-xl mx-2 text-base text-th-primary-dark">
      <Popover className="relative">
        <Popover.Button className="font-thin tracking-wide  w-full text-left  text-xl flex items-center transition ease-in-out hover:-translate-y-0.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            className="mx-1 mt-0 text-cyan-300"
            stroke="none"
            fill="#EA6D37"
          >
            <path d="M12 0l-11 6v12l11 6 11-6v-12l-11-6zm-9 16.813v-9.626l9-4.908 9 4.908v9.626l-9 4.909-9-4.909z" />
          </svg>
          Pulse
        </Popover.Button>

        <Popover.Panel className="font-thin tracking-wide rounded  text-xl z-40  w-48 translate-x-0  translate-y-3 border absolute z-10 bg-th-background">
          <div className="flex flex-col">
            <a className="w-full py-4 hover:bg-th-primary-light " href="/">
              News
            </a>
            <a className="w-full py-4 hover:bg-th-primary-light " href="/">
              Podcast
            </a>
            <a className="w-full py-4 hover:bg-th-primary-light " href="/">
              Mailing List
            </a>
          </div>
        </Popover.Panel>
      </Popover>
    </div>
  );
}

function PathDropdown() {
  return (
    <div className="font-thin tracking-wide  text-xl mx-2 text-base text-th-primary-dark">
      <Popover className="relative">
        <Popover.Button className=" font-thin tracking-wide  w-full text-left  text-xl flex items-center transition ease-in-out hover:-translate-y-0.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            className="mx-1 mt-0 text-cyan-300"
            stroke="none"
            fill="#F9B700"
          >
            <path d="M12 5.887l8.468 14.113h-16.936l8.468-14.113zm0-3.887l-12 20h24l-12-20z" />
          </svg>
          Path
        </Popover.Button>

        <Popover.Panel className="font-thin tracking-wide rounded  text-xl z-40 border border-ygg-purple-300 w-48 absolute -translate-x-0 translate-y-3 z-40 bg-th-background">
          <div className="flex flex-col ">
            <a
              className="w-full py-4 hover:bg-th-primary-light "
              href="/web3/drops/yggdrasil"
            >
              About
            </a>
            <a
              className="w-full py-4 hover:bg-th-primary-light "
              href="/web3/drops/anthropos"
            >
              Team
            </a>
            <a
              className="w-full py-4 hover:bg-th-primary-light "
              href="/web3/drops/anthropos"
            >
              Roadmap
            </a>
          </div>
        </Popover.Panel>
      </Popover>
    </div>
  );
}

function VibeDropdown() {
  return (
    <div className="font-thin tracking-wide  text-xl mx-2 text-base text-th-primary-dark">
      <Popover className="relative">
        <Popover.Button className="font-thin tracking-wide w-full text-left text-xl flex items-center transition ease-in-out hover:-translate-y-0.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            className="mx-1 mt-0.5 text-cyan-300 rotate-45"
            stroke="none"
            fill="#609336"
          >
            <path d="M22 2v20h-20v-20h20zm2-2h-24v24h24v-24z" />
          </svg>
          Vibe
        </Popover.Button>

        <Popover.Panel className="font-thin tracking-wide rounded  text-xl z-40 border border-ygg-purple-300 w-48 absolute -translate-x-0 translate-y-3 z-40 bg-th-background">
          <div className="flex flex-col ">
            <a
              className="w-full py-4 hover:bg-th-primary-light "
              href="/web3/drops/yggdrasil"
            >
              Community
            </a>
            <a
              className="w-full py-4 hover:bg-th-primary-light "
              href="/web3/drops/anthropos"
            >
              Music
            </a>
          </div>
        </Popover.Panel>
      </Popover>
    </div>
  );
}

export default function IndexPage() {
  const [show, setShow] = useState(null);
  const [profile, setProfile] = useState(false);
  const [product, setProduct] = useState(false);
  const [deliverables, setDeliverables] = useState(false);
  const { account, library } = useWeb3React();

  const isConnected2 = typeof account === "string" && !!library;
  const triedToEagerConnect = useEagerConnect();

  const isConnected = typeof account === "string" && !!library;

  const {
    active,
    error,
    activate,
    chainId,

    setError,
    deactivate
  } = useWeb3React();

  async function disconnect() {
    try {
      deactivate();
    } catch (ex) {
      console.log(ex);
    }
  }

  function ProfileDropdown() {
    return (
      <Popover className="relative">
        <Popover.Button className="flex mt-0.5  items-center translate-x-0 translate-y-0  ">
          <Account triedToEagerConnect={triedToEagerConnect} />
        </Popover.Button>

        <Popover.Panel className="font-thin tracking-wide rounded z-40 font-futura text-xl text-th-primary-dark border w-48 absolute right-0 translate-y-4 z-10 bg-th-background">
          <div className="flex flex-col">
            <a className="w-full py-4 hover:bg-th-primary-light " href="/">
              Profile
            </a>
            <a className="w-full py-4 hover:bg-th-primary-light " href="/">
              Tokens
            </a>
            <button
              className="w-full py-4 hover:bg-th-primary-light font-thin tracking-wide"
              onClick={() => {
                disconnect();
                console.log(active);
              }}
            >
              Disconnect
            </button>
          </div>
        </Popover.Panel>
      </Popover>
    );
  }

  return (
    <>
      <div className="h-full w-full">
        {/* Code block starts */}

        <div
          className={
            show
              ? "w-full lg:hidden h-full  fixed  z-40  transform  translate-x-0 "
              : "   w-full lg:hidden h-full  fixed z-40  transform -translate-x-full -translate-y-full"
          }
        >
          {" "}
          <div
            className=" bg-gray-800 opacity-50 w-full h-full"
            onClick={() => setShow(!show)}
          />
          <div className="w-64 z-40 fixed z-40 top-0 bg-th-background shadow h-full flex-col justify-between lg:hidden pb-4 transition duration-150 ease-in-out">
            <div className="relative px-6 h-full">
              <div className="flex flex-col justify-between h-full w-full">
                <div>
                  <div className="mt-6 flex w-full items-center justify-between">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center">
                        <a href="/">
                          <div className="-mb-2 w-48">
                            <Logo />
                          </div>
                        </a>
                      </div>
                      <div
                        id="cross"
                        className="text-th-primary-dark w-4"
                        onClick={() => setShow(!show)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="stroke-th-primary-dark stroke-1 icon icon-tabler icon-tabler-x -translate-y-2 translate-x-2"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5px"
                          stroke="th-primary-dark"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line
                            stroke="th-primary-dark"
                            x1={18}
                            y1={6}
                            x2={6}
                            y2={18}
                          />
                          <line
                            stroke="th-primary-dark"
                            x1={6}
                            y1={6}
                            x2={18}
                            y2={18}
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <ul className="f-m-m">
                    <li className="pt-10 text-gray-800 py-4 text-center font-futura text-xl">
                      <SourceDropdown />
                    </li>
                    <li className=" text-gray-800 py-4 text-center font-futura text-xl">
                      <PulseDropdown />
                    </li>
                    <li className="text-gray-800 py-4 text-center font-futura text-xl">
                      <PathDropdown />
                    </li>
                    <li className="text-gray-800 py-4 text-center font-futura text-xl">
                      <VibeDropdown />
                    </li>

                    <li className="mt-8 ml-9 flex mx-auto items-center"></li>
                    <li className="text-gray-800 mt-3 h-full flex mx-auto text-center justify-center">
                      {isConnected ? (
                        <div className="flex mx-auto  w-full">
                          <div className="flex  h-full flex-col mx-auto my-auto items-center justify-center">
                            <ProfileDropdown />
                          </div>
                        </div>
                      ) : (
                        <div className="flex w-full h-full flex-col mx-auto my-auto items-center  justify-center">
                          <Account triedToEagerConnect={triedToEagerConnect} />
                        </div>
                      )}{" "}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="absolute bottom-4 inset-x-0	flex mx-auto justify-center">
                <Switcher />
              </div>
            </div>
          </div>
        </div>

        <div className="hidden">
          <Alert />
        </div>

        <nav>
          {show ? (
            <div className="h-px -mt-0.5"></div>
          ) : (
            <div className="font-molle text-2xl py-0.5 pt-0.5 bg-th-background px-6 w-full flex lg:hidden justify-between items-center  top-0 z-40">
              <a href="/">
                <div className="-mb-2.5 w-80">
                  <Logo />
                </div>
              </a>
              <div className="flex items-center">
                <div className="relative mr-6 "></div>
                <div
                  id="menu"
                  className="text-gray-800"
                  onClick={() => setShow(!show)}
                >
                  {show ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="stroke-th-primary-dark stroke-1 icon icon-tabler icon-tabler-x "
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="th-primary-dark"
                      fill="th-primary-dark"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path
                        stroke="th-primary-dark"
                        d="M0 0h24v24H0z"
                        fill="none"
                      />
                      <line
                        stroke="th-primary-dark"
                        x1={4}
                        y1={6}
                        x2={20}
                        y2={6}
                      />
                      <line
                        stroke="th-primary-dark"
                        x1={4}
                        y1={12}
                        x2={20}
                        y2={12}
                      />
                      <line
                        stroke="th-primary-dark"
                        x1={4}
                        y1={18}
                        x2={20}
                        y2={18}
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="stroke-th-primary-dark stroke-1 icon icon-tabler icon-tabler-x "
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="th-primary-dark"
                      fill="th-primary-dark"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <line
                        stroke="th-primary-dark"
                        x1={4}
                        y1={6}
                        x2={20}
                        y2={6}
                      />
                      <line
                        stroke="th-primary-dark"
                        x1={4}
                        y1={12}
                        x2={20}
                        y2={12}
                      />
                      <line
                        stroke="th-primary-dark"
                        x1={4}
                        y1={18}
                        x2={20}
                        y2={18}
                      />
                    </svg>
                  )}
                </div>
              </div>
            </div>
          )}
        </nav>
        <div>
          <nav className="h-12 items-center text-center font-molle text-base hidden lg:flex py-4 shadow-none  px-6 w-full flex justify-between bg-th-background top-0 z-40">
            <div className="flex h-10  translate-y-0">
              <a href="/" className="w-96 -mb-4">
                <Logo />
              </a>
              <div className="font-futura text-xl w-min flex mx-auto p-2 mt-0.5 translate-y-1.5 ">
                <SourceDropdown />
                <PulseDropdown />
                <PathDropdown />
                <VibeDropdown />
              </div>
            </div>

            {isConnected ? (
              <div className="text-th-primary-dark flex items-center">
                <ProfileDropdown />
                <div className="translate-x-1">
                  <Switcher />
                </div>
              </div>
            ) : (
              <div className="flex text-th-primary-dark items-center">
                <Account triedToEagerConnect={triedToEagerConnect} />
                <div>
                  <div className="translate-x-1">
                    <Switcher />
                  </div>
                </div>
              </div>
            )}
          </nav>
        </div>

        <div className="w-full h-px bg-th-accent-light"></div>
        <div className="w-full h-px bg-th-accent-light"></div>
        <div className="w-full h-px bg-th-accent-light"></div>
        {/* Code block ends */}
      </div>
      <style jsx>{`
        @font-face {
          font-family: myFirstFont;
          src: url(/fonts/Halaney.otf);
        }

          #depict,
          #depict2,
          #depict3 {
            font-family: myFirstFont;
            
          }
        }
      `}</style>
    </>
  );
}
