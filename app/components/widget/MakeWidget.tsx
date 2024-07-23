"use client";

import React from "react";
import { useEffect, useState } from "react";
import PublicationRow from './PublicationRow';

const MakeWidget = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-around w-1/2 bg-gray-200 rounded-lg p-5">
        <div className="flex flex-col items-center">
          <h3 className="text-2xl font-bold">Total Citations</h3>
          <p className="text-lg">100</p>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-2xl font-bold">h-index</h3>
          <p className="text-lg">66</p>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-2xl font-bold">i10-index</h3>
          <p className="text-lg">260</p>
        </div>
      </div>

      <div className="flex flex-col mt-8 w-1/2 bg-gray-200 rounded-lg">
        <div role="tablist" className="tabs tabs-boxed">
          <a role="tab" className="tab">
            100 Most Cited Publications
          </a>
          <a role="tab" className="tab tab-active">
            100 Most Recent Publications
          </a>
        </div>
        <div>
          <PublicationRow />
        </div>
      </div>
    </div>
  );
};

export default MakeWidget;
