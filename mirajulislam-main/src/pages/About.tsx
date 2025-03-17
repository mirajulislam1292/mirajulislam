
import React from 'react';
import Layout from '@/components/Layout';

const About: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">My name is Mirajul Islam Mahim</h2>
          <p className="text-lg">
            I'm an enthusiastic learner and creative mind from Narayanganj, Bangladesh. 
            I'm currently pursuing my studies in Class 12 at the Govt. Tolaram College.
          </p>
          <p className="text-lg">
            I hold the firm conviction that technology coupled with creativity can lead to 
            impactful solutions for real-life issues. My solid background in the domains 
            of electronics, robotics, and coding has enabled me to contribute to various 
            endeavors focusing on environmental problems and endorsing lasting innovation.
          </p>
          
          <h3 className="text-xl font-semibold mt-8">My Philosophy</h3>
          <p className="text-lg">
            I thrive on experiential learning, constantly pushing the boundaries of what 
            I can achieve through hands-on exploration and teamwork. My love for robotics 
            and automation stems from a desire to make tasks simpler, smarter, and more efficient. 
            Alongside this, I'm deeply committed to raising awareness about environmental issues 
            and using technology to combat them effectively.
          </p>
        </div>
        
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">What I'm Currently Doing</h2>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Member at Team Atlas</li>
            <li>Head of Administration of Govt. Tolaram College Science Club</li>
            <li>Vice President of Govt. Tolaram College Science Club</li>
            <li>Volunteer at Bangladesh Red Crescent Youth</li>
            <li>Independent Researcher (Field: Water Salinity)</li>
            <li>Student at Govt. Tolaram College</li>
          </ul>
        </div>
        
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">Achievements</h2>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Certified Trainee – Early Warning for All (EW4ALL) & Anticipatory Action (AA) Program</li>
            <li>Certified Trainee – GreenDay Training Program (GDT)</li>
            <li>Special Recognition – BCSIR Science Fest</li>
            <li>Nationalist – International Robotics Olympiad (Multiple Recognitions)</li>
            <li>Nationalist & District Champion – Wildlife Olympiad</li>
            <li>2nd Runner-up – Goethe-Institut Science Film Festival</li>
            <li>Nationalist (13th) & District Champion – 45th National Science and Technology Week</li>
            <li>District Champion – 46th National Science and Technology Week</li>
            <li>Champion – UIU CSC FEST (ICT Olympiad)</li>
            <li>Nationalist – International Earth Science Olympiad</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default About;
