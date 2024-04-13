'use client'
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

const SignupCard: React.FC = () => {
  const [fullName, setFullName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<number | any>(null)
  const [password, setPassword] = useState<string>("");
  const [password2, setPassword2] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Define your API endpoint here
  const apiEndpoint = process.env.NEXT_PUBLIC_API_ENDPOINT || ""; // Retrieve the API endpoint from the environment variable

  // Handle form submission
  const handleSubmit = async () => {
    if(!doulbleCheckPassword()) {
      return;
    } 
    if (fullName.trim() && password.trim()) {
      try {
        doulbleCheckPassword()
        const response = await axios.post(`${apiEndpoint}/api/user/register`, {
          fullName,
          phoneNumber,
          password,
        });

        if (response.data.success) {
          // Assuming response.data contains a success field to indicate a successful login
          redirect("/login"); // Redirecting to book appointment page
        } else {
          setErrorMessage(response.data.message || "Signup failed.");
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

  const doulbleCheckPassword= ()=> {
    if (password !== password2) {
      setErrorMessage("Password do not match, try again")
      setIsModalOpen(true)
    }
    else return true;
  }

  return (
    <div className="flex justify-center items-center bg-black w-full h-screen">
      <Modal open={isModalOpen} onClose={closeModal}>{errorMessage}</Modal>
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Signup</CardTitle>
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
                <Label htmlFor="password">Phone Number</Label>
                <Input
                  id="phoneNumber"
                  type="string"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
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
              <div className="space-y-1">
                <Label htmlFor="password2">Confirm Password</Label>
                <Input
                  id="password2"
                  type="password"
                  value={password2}
                  onChange={(e) => setPassword2(e.target.value)}
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

export default SignupCard;
