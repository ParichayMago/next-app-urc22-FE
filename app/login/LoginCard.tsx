import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import axios from "axios";
import { redirect } from "next/navigation";
import Modal from "@/components/ui/modal";

const LoginCard: React.FC = () => {
  const [fullName, setFullName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Define your API endpoint here
  const apiEndpoint = process.env.NEXT_PUBLIC_API_ENDPOINT || ""; // Retrieve the API endpoint from the environment variable

  // Handle form submission
  const handleSubmit = async () => {
    if (fullName.trim() && password.trim()) {
      try {
        console.log("This is the api endpoint =>",apiEndpoint);
        const response = await axios.post(`${apiEndpoint}/api/user/login`, {
          fullName,
          password,
        });

        if (response.data.success) {
          // Assuming response.data contains a success field to indicate a successful login
          localStorage.setItem("nameLS", fullName);
          redirect("/bookappointment"); // Redirecting to book appointment page
        } else {
          setErrorMessage(response.data.message || "Login failed.");
          setIsModalOpen(true);
        }
      } catch (error) {
        setErrorMessage(
          `An error occurred. Please try again later. Error: ${error}`
        );
        setIsModalOpen(true);
      }
    } else {
      setErrorMessage("Please enter both full name and password.");
      setIsModalOpen(true);
    }
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex justify-center items-center bg-black w-full h-screen">
      <Modal open={isModalOpen} onClose={closeModal}>{errorMessage}</Modal>
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSubmit}>Login</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LoginCard;
