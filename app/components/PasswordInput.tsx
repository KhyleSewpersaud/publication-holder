import React from "react";

interface PassWordInputProps {
    password: string;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    showPassword: boolean;
    toggleShowPassword: () => void;
}

const PasswordInput: React.FC<PassWordInputProps> = ({
  password,
  setPassword,
  showPassword,
  toggleShowPassword,
}) => {
  return (
    <div>
      <label className="input input-bordered flex items-center gap-2 relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
            clipRule="evenodd"
          />
        </svg>
        <input
          type={showPassword ? "text" : "password"}
          className="grow"
          placeholder="Confirm Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="button"
          onClick={toggleShowPassword}
          className="absolute right-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4"
          >
            {showPassword ? (
              <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zm-8 4.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zM8 4.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z" />
            ) : (
              <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zm-3.27 4.29l-9-9a.75.75 0 1 1 1.06-1.06l9 9a.75.75 0 1 1-1.06 1.06zM2.879 1.54l1.06 1.06a7.487 7.487 0 0 0-.646 1.01A5.502 5.502 0 0 0 8 10.5a5.502 5.502 0 0 0 3.707-1.895 7.487 7.487 0 0 0 1.01-.646l1.06 1.06A8.5 8.5 0 0 1 8 11.5a8.5 8.5 0 0 1-5.121-1.961z" />
            )}
          </svg>
        </button>
      </label>
    </div>
  );
};

export default PasswordInput;
