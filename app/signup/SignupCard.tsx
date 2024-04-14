"use client";
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
import { useRouter } from "next/navigation";

const SignupCard: React.FC = () => {
  const router = useRouter();
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<number | any>("");
  const [password, setPassword] = useState<string>("");
  const [password2, setPassword2] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Define your API endpoint here
  const apiEndpoint = process.env.NEXT_PUBLIC_API_ENDPOINT || ""; // Retrieve the API endpoint from the environment variable

  // Handle form submission
  const handleSubmit = async () => {
    if (!doulbleCheckPassword()) {
      return;
    }
    if (fullName.length <= 3 || email.length <= 3) {
      setErrorMessage("Enter valid name and email");
      setIsModalOpen(true);
    }
    if (fullName.trim() && password.trim() && email.trim()) {
      try {
        doulbleCheckPassword();
        const response = await axios.post(`${apiEndpoint}/api/user/register`, {
          fullName,
          email,
          phoneNumber,
          password,
        });

        if (response.data.success) {
          localStorage.setItem(email, "emailLS");
          // Assuming response.data contains a success field to indicate a successful login
          router.push("/bookappointment");
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

  const doulbleCheckPassword = () => {
    if (password !== password2) {
      setErrorMessage("Password do not match, try again");
      setIsModalOpen(true);
    } else return true;
  };

  return (
    <div className="flex justify-center items-center bg-black w-full h-screen">
      <Modal open={isModalOpen} onClose={closeModal}>
        {errorMessage}
      </Modal>
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
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="phoneNumber">Phone Number</Label>
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
              <Button onClick={handleSubmit}>Signup</Button>
              <a className="mx-4" href="#" onClick={()=> router.push("/login") }>Click here to login</a>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SignupCard;
