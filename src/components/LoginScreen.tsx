import { useState } from "react";
import { Github, GitlabIcon, Boxes, KeyRound } from "lucide-react"; 
import { Button } from "./ui/button";

export const LoginScreen = () => {
  const [isSelfHosted, setIsSelfHosted] = useState(false);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
      {/* Stats Section */}
      <div className="hidden md:flex w-full md:w-1/2 p-6 items-center justify-center relative bg-white">
        <img alt="stats" className="w-4/5 max-w-xl h-auto mx-auto" src="group.png" />
        <img alt="logo" className="absolute bottom-0 left-0 w-1/4 max-w-xs h-auto" src="Subtract.png" />
      </div>

      {/* Login Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 bg-gray-100">
        <div className="max-w-md w-full bg-white p-6 rounded-xl shadow-lg">
          <div className="text-center">
            <h2 className="mt-4 text-2xl md:text-3xl font-bold text-gray-900">
              Welcome to CodeAnt AI
            </h2>
          </div>

          <div className="flex gap-4 mt-6">
            <Button
              className={`flex-1 ${!isSelfHosted ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"}`}
              onClick={() => setIsSelfHosted(false)}
            >
              SAAS
            </Button>
            <Button
              className={`flex-1 ${isSelfHosted ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"}`}
              onClick={() => setIsSelfHosted(true)}
            >
              Self Hosted
            </Button>
          </div>

          <div className="space-y-4 mt-8">
  {isSelfHosted ? (
    <>
      <Button
        variant="outline"
        className="w-[93%] flex items-center justify-center bg-gray-100 border border-gray-300 text-gray-700 py-3"
        onClick={() => console.log("SSO login")}
        style={{ marginRight: "5%" }} // Add right margin
      >
        <KeyRound className="w-5 h-5 mr-2" />
        <span>Sign in with SSO</span>
      </Button>
      <Button
        variant="outline"
        className="w-[93%] flex items-center justify-center bg-gray-100 border border-gray-300 text-gray-700 py-3"
        onClick={() => console.log("Self Hosted GitLab login")}
        style={{ marginRight: "5%" }} // Add right margin
      >
        <GitlabIcon className="w-5 h-5 mr-2" />
        <span>Self Hosted GitLab</span>
      </Button>
    </>
  ) : (
    <>
      <Button
        variant="outline"
        className="w-[93%] flex items-center justify-center bg-gray-100 border border-gray-300 text-gray-700 py-3"
        onClick={() => console.log("Github login")}
        style={{ marginRight: "5%" }} // Add right margin
      >
        <Github className="w-5 h-5 mr-2" />
        <span>Sign in with Github</span>
      </Button>
      <Button
        variant="outline"
        className="w-[93%] flex items-center justify-center bg-gray-100 border border-gray-300 text-gray-700 py-3"
        onClick={() => console.log("Bitbucket login")}
        style={{ marginRight: "5%" }} // Add right margin
      >
        <Boxes className="w-5 h-5 mr-2" />
        <span>Sign in with Bitbucket</span>
      </Button>
      <Button
        variant="outline"
        className="w-[93%] flex items-center justify-center bg-gray-100 border border-gray-300 text-gray-700 py-3"
        onClick={() => console.log("Azure DevOps login")}
        style={{ marginRight: "5%" }} // Add right margin
      >
        <KeyRound className="w-5 h-5 mr-2" />
        <span>Sign in with Azure DevOps</span>
      </Button>
      <Button
        variant="outline"
        className="w-[93%] flex items-center justify-center bg-gray-100 border border-gray-300 text-gray-700 py-3"
        onClick={() => console.log("GitLab login")}
        style={{ marginRight: "5%" }} // Add right margin
      >
        <GitlabIcon className="w-5 h-5 mr-2" />
        <span>Sign in with GitLab</span>
      </Button>
    </>
  )}
</div>


          <div className="text-center text-sm text-gray-500 mt-6">
            By signing up you agree to the{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
