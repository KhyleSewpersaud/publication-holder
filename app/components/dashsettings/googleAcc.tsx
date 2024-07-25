import React from "react";
import { IsAuth } from "@/lib/isAuth";

const GoogleAcc: React.FC<GoogleAccProps> = ({ user }) => {
  const { handleNavigation } = IsAuth();
  return (
    <div className="flex flex-col items-center">
      <button className="btn btn-primary mb-5" onClick={handleNavigation}>Back to Dashboard</button>
      <div className="flex flex-col items-center p-10 bg-base-300 rounded-xl mb-5">
        <h1 className="text-4xl font-bold">Profile</h1>
        <div>
          Email: {user.email}
        </div>
      </div>
      <div className="flex flex-col items-center p-10 bg-base-300 rounded-xl mb-5">
        <h1 className="text-4xl font-bold">Subscription</h1>
        <div>
        </div>
      </div>
    </div>
  );
};

export default GoogleAcc;
