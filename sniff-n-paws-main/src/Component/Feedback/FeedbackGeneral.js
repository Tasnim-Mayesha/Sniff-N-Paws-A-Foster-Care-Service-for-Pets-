import React, { useEffect, useState } from "react";
import FeedbackAdd from "./FeedbackAdd";
import FeedbackCard from "./FeedbackCard";
import { Link } from "react-router-dom";
import FeedbackAvg from "./FeedbackAvg";

const FeedbackGeneral = () => {
  return (
    <div>
      <div className="text-center pt-24">
        <h3 className="text-blue-800 uppercase font-black text-2xl">
          OUR feedbacks
        </h3>
      </div>
      <div className="flex gap-96">
        <div className="pl-80 pt-20">
          <div class="dropdown dropdown-right">
            <label tabindex="0" className="btn m-1 bg-blue-50">
              <small className="text-justify text-xs font-extrabold text-blue-700">
                Search by Rating
              </small>
            </label>
            <ul
              tabindex="0"
              class="dropdown-content menu p-2 shadow bg-blue-50 rounded-box w-52"
            >
              <li>
                <Link
                  to="/positive_feedback"
                  className="w-full uppercase h-full font-bold text-center text-sm text-blue-700"
                >
                  👉 positive feedback
                </Link>
              </li>

              <li>
                <Link
                  to="/negative_feedback"
                  className="w-full uppercase h-full font-bold text-center text-sm text-blue-700"
                >
                  👉 negative feedback
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="pl-20 pt-20">
          <div class="dropdown dropdown-right">
            <label tabindex="0" className="btn m-1 bg-blue-50">
              <small className="text-justify text-xs font-extrabold text-blue-700">
                Search Review
              </small>
            </label>
            <ul
              tabindex="0"
              class="dropdown-content menu p-2 shadow bg-blue-50 rounded-box w-52"
            >
              <li>
                <Link
                  to="/feedback_admin_review"
                  className="w-full uppercase h-full font-bold text-center text-sm text-blue-700"
                >
                  👉 admin feedback
                </Link>
              </li>

              <li>
                <Link
                  to="/feedback_staff_review"
                  className="w-full uppercase h-full font-bold text-center text-sm text-blue-700"
                >
                  👉 staff feedback
                </Link>
              </li>
              <li>
                <Link
                  to="/feedback_veterinarian_review"
                  className="w-full uppercase h-full font-bold text-center text-sm text-blue-700"
                >
                  👉 vet feedback
                </Link>
              </li>
              <li>
                <Link
                  to="/feedback_service_review"
                  className="w-full uppercase h-full font-bold text-center text-sm text-blue-700"
                >
                  👉 services feedback
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3">
        <FeedbackCard></FeedbackCard>
        <FeedbackAvg></FeedbackAvg>
        <FeedbackAdd></FeedbackAdd>
      </div>
    </div>
  );
};

export default FeedbackGeneral;
