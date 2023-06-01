"use client";
import React from "react";
import {
  Dropdown,
  Label,
  RangeSlider,
  Select,
  TextInput,
} from "flowbite-react";

import { Accordion } from "flowbite-react";
import ImbalHasilSlider from "./ImbalHasilSlider";

const Pendanaan = () => {
  return (
    <>
      <div className="">
        <div className="flex items-center justify-between">
          <div>
            <h1>Pendanaan</h1>
            <span>Total 5 Aktif, 5 Penuh, 100 Berhasil</span>
          </div>
          <div className="">
            <form className="flex items-center ">
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="simple-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search"
                  required
                />
              </div>
              <button
                type="submit"
                className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-600 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
                <span className="sr-only">Search</span>
              </button>
            </form>
          </div>
        </div>
        {/* Main */}
        <div className="grid grid-cols-[auto_1fr] ">
          {/* Filter */}
          <div className="rounded-md p-4 py-5 sticky top-12 h-aut0 drop-shadow-md">
            <div className="">
              <h1 className="text-xl font-semibold leading-6">
                Filter Pendanaan
              </h1>
              <p className="text-md  py-2">
                Ukur pendanaan sesuai dengan <br /> rating pilihanmu.
              </p>
            </div>
            <div className="w-[300px]">
              <div>
                <Accordion className="">
                  <Accordion.Panel className="">
                    <Accordion.Title className="!focus:ring-0 !hover:drop-shadow-0">
                      Risiko
                    </Accordion.Title>
                    <Accordion.Content>
                      <div className="mb-2 text-gray-500 dark:text-gray-400">
                        <p>Flowbite is first Flowbite is first</p>
                      </div>
                      <div className="text-gray-500 dark:text-gray-400">
                        <p>Check out the</p>
                      </div>
                    </Accordion.Content>
                  </Accordion.Panel>
                </Accordion>
              </div>
              <div>
                <Accordion>
                  <Accordion.Panel>
                    <Accordion.Title className="focus:ring-0">
                      Imbal Hasil
                    </Accordion.Title>
                    <Accordion.Content>
                      <div className="flex max-w-md flex-col gap-4">
                        <div>
                          <div className="mb-1 block">
                            <Label htmlFor="default-range" value="Default" />
                          </div>
                          <ImbalHasilSlider />
                        </div>
                      </div>
                    </Accordion.Content>
                  </Accordion.Panel>
                </Accordion>
              </div>
              <div>
                <Accordion>
                  <Accordion.Panel>
                    <Accordion.Title className="!text-black focus:ring-0 shadow-none">
                      Durasi Pengembalian
                    </Accordion.Title>
                    <Accordion.Content>
                      <div className="max-w-md" id="select">
                        <div className="mb-2 block">
                          <Label
                            htmlFor="countries"
                            value="Select your country"
                          />
                        </div>
                        <Select id="countries" required>
                          <option>1-3 Bulan</option>
                          <option>3-6 Bulan</option>
                          <option>6-12 Bulan</option>
                          <option> {">"}1 tahun</option>
                        </Select>
                      </div>
                    </Accordion.Content>
                  </Accordion.Panel>
                </Accordion>
              </div>
              <div className="mt-4">
                <button className="px-3 py-2 text-white bg-primary w-full rounded-full">
                  Atur Filter
                </button>
                <button className="px-4 py-2 text-primary rounded-full hover:bg-slate-200">
                  Reset Filter
                </button>
              </div>
            </div>
          </div>
          <div className="">box 2</div>
        </div>
      </div>
    </>
  );
};

export default Pendanaan;
