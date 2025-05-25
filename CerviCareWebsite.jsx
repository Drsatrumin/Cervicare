
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Facebook, Instagram } from "lucide-react";

export default function CerviCareWebsite() {
  return (
    <div className="min-h-screen bg-pink-50 text-gray-800">
      <div className="bg-pink-100 py-16 px-4 text-center">
        <h1 className="text-5xl font-bold text-pink-700 mb-4">CerviCare Initiative Tanzania</h1>
        <p className="text-xl mb-6">Empowering communities through HPV awareness and cervical cancer prevention</p>
        <Button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-xl text-lg">Join Our Campaign</Button>
      </div>
      <div className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-center text-pink-700 mb-6">About Us</h2>
        <p className="text-lg text-center">
          CerviCare Initiative is a youth-led public health campaign focused on increasing HPV vaccine uptake,
          raising awareness about cervical cancer, and promoting early screening practices in Tanzania.
        </p>
      </div>
      <div className="bg-white py-12 px-6">
        <h2 className="text-3xl font-semibold text-center text-pink-700 mb-6">Our Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "HPV Vaccine Drive",
              description: "Partnering with schools and clinics to increase access to the HPV vaccine."
            },
            {
              title: "Community Awareness",
              description: "Hosting workshops and forums to educate about cervical cancer prevention."
            },
            {
              title: "Cervical Screening Camps",
              description: "Organizing screening camps for early detection of cervical cancer."
            }
          ].map((project, index) => (
            <Card key={index} className="shadow-md">
              <CardContent className="p-4">
                <h3 className="text-xl font-bold mb-2 text-pink-600">{project.title}</h3>
                <p>{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div className="bg-pink-100 py-12 px-6 text-center">
        <h2 className="text-3xl font-semibold text-pink-700 mb-4">Get Involved</h2>
        <p className="mb-6">Join us as a volunteer, donor, or partner to make a real impact in women's health across Tanzania.</p>
        <Button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-xl text-lg">Become a Volunteer</Button>
      </div>
      <div className="py-12 px-6 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-pink-700 mb-6">Contact Us</h2>
        <p>Email: <a href="mailto:cervicaretz@gmail.com" className="text-pink-600">cervicaretz@gmail.com</a></p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="#"><Facebook className="text-pink-600" /></a>
          <a href="#"><Instagram className="text-pink-600" /></a>
          <a href="mailto:cervicaretz@gmail.com"><Mail className="text-pink-600" /></a>
        </div>
      </div>
      <footer className="text-center py-6 bg-pink-200 text-pink-800">
        &copy; 2025 CerviCare Initiative Tanzania. All rights reserved.
      </footer>
    </div>
  );
}
