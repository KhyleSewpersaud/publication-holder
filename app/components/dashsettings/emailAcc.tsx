import React, { useState } from "react";
import { IsAuth } from "@/lib/isAuth";
import { resetPassword } from "@/lib/authSubmit";

const EmailAcc: React.FC<EmailAccProps> = ({ user }) => {
  const { handleNavigation } = IsAuth();
  const [email, setEmail] = useState(user.email)
  return (
    <div className="flex flex-col items-center">
      <button className="btn btn-primary mb-5" onClick={handleNavigation}>
        Back to Dashboard
      </button>
      <div className="flex flex-col items-center p-10 bg-base-300 rounded-xl mb-5">
        <h1 className="text-4xl font-bold">Profile</h1>
        <div className="flex text-justify">
          <p>Email: {user.email}</p>
          <button className="btn btn-link" onClick={() => resetPassword(email, setEmail)}>Reset Password</button>
        </div>
      </div>
      <div className="flex flex-col items-center p-10 bg-base-300 rounded-xl mb-5">
        <h1 className="text-4xl font-bold">Subscription</h1>
        <div></div>
      </div>
    </div>
  );
};

export default EmailAcc;
