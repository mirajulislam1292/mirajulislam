import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import { Separator } from '@/components/ui/separator';
import { ArrowRight, Award, Users, UserCheck, BookOpen, FlaskConical, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <Layout>
      <Hero />
      
      <section className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4">
                About Me
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                I'm Mirajul Islam Mahim
              </h2>
              <p className="text-muted-foreground mb-6">
                A young men hailing from Narayanganj, Bangladesh. I'm an eager knowledge-seeker and 
                visionary, deeply engaged with cutting-edge technology, pioneering ideas, and 
                striving to leave a positive influence on the world.
              </p>
              <p className="text-muted-foreground mb-6">
                I'm currently pursuing my studies in Class 12 at the Govt. Tolaram College. I hold 
                the firm conviction that technology coupled with creativity can lead to impactful 
                solutions for real-life issues. My solid background in the domains of electronics, 
                robotics, and coding has enabled me to contribute to various endeavors focusing on 
                environmental problems and endorsing lasting innovation.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/1a415744-bd8e-4b54-95b7-7e5cad070f44.png" 
                alt="Mirajul Islam Mahim" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4">
              My Philosophy
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              How I Approach Life & Work
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I thrive on experiential learning, constantly pushing the boundaries of what I can achieve 
              through hands-on exploration and teamwork. My love for robotics and automation stems from 
              a desire to make tasks simpler, smarter, and more efficient. Alongside this, I'm deeply 
              committed to raising awareness about environmental issues and using technology to combat 
              them effectively.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/444dcdfb-977c-4c67-9d34-30eec74fa653.png" 
                alt="Mirajul Islam Mahim in the mountains" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-display font-semibold mb-4">Exploring New Horizons</h3>
              <p className="text-muted-foreground mb-6">
                I believe in pushing boundaries and exploring new territories, both in the physical world and in the realm of technology. 
                Every challenge is an opportunity to learn and grow, and I approach each one with enthusiasm and determination.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-secondary/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4">
              What You'll Find Here
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              My Creative Space
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              This platform is my creative space—a place where I share my blogs, showcase my innovative projects, 
              and document my journey as a young technologist. From robotics to AI, you'll discover how my work 
              combines technology and sustainability to make a meaningful impact.
            </p>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Feel free to explore my portfolio and get inspired. Together, let's create a better tomorrow!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12">
            <div>
              <h3 className="text-2xl font-display font-semibold mb-4">Innovation & Creativity</h3>
              <p className="text-muted-foreground mb-6">
                I'm constantly seeking new ways to innovate and create positive change. My passion for technology drives me to 
                develop solutions that address real-world challenges, particularly in the areas of environmental sustainability and education.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/53e33196-47e1-4a97-9758-5f6e9e79d351.png" 
                alt="Mirajul Islam Mahim portrait" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4">
              Current Engagements
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
              What I am Currently Doing
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="flex items-start gap-4 text-left p-6 rounded-xl bg-secondary/20">
                <Users className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-1">Member at Team Atlas</h3>
                  <p className="text-sm text-muted-foreground">Contributing to collaborative projects</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 text-left p-6 rounded-xl bg-secondary/20">
                <UserCheck className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-1">Head of Administration</h3>
                  <p className="text-sm text-muted-foreground">Govt. Tolaram College Science Club</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 text-left p-6 rounded-xl bg-secondary/20">
                <UserCheck className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-1">Vice President</h3>
                  <p className="text-sm text-muted-foreground">Govt. Tolaram College Science Club</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 text-left p-6 rounded-xl bg-secondary/20">
                <Users className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-1">Volunteer</h3>
                  <p className="text-sm text-muted-foreground">Bangladesh Red Crescent Youth</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 text-left p-6 rounded-xl bg-secondary/20">
                <FlaskConical className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-1">Independent Researcher</h3>
                  <p className="text-sm text-muted-foreground">Field: Water Salinity</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 text-left p-6 rounded-xl bg-secondary/20">
                <GraduationCap className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-1">Student</h3>
                  <p className="text-sm text-muted-foreground">Govt. Tolaram College</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-secondary/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4">
              Achievement
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
              Recognitions & Awards
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="flex items-start gap-4 text-left p-6 rounded-xl bg-white">
                <Award className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-1">Certified Trainee</h3>
                  <p className="text-sm text-muted-foreground">Early Warning for All (EW4ALL) & Anticipatory Action (AA) Program</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 text-left p-6 rounded-xl bg-white">
                <Award className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-1">Certified Trainee</h3>
                  <p className="text-sm text-muted-foreground">GreenDay Training Program (GDT)</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 text-left p-6 rounded-xl bg-white">
                <Award className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-1">Special Recognition</h3>
                  <p className="text-sm text-muted-foreground">BCSIR Science Fest</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 text-left p-6 rounded-xl bg-white">
                <Award className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-1">Nationalist</h3>
                  <p className="text-sm text-muted-foreground">International Robotics Olympiad (Multiple Recognitions)</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 text-left p-6 rounded-xl bg-white">
                <Award className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-1">Nationalist & District Champion</h3>
                  <p className="text-sm text-muted-foreground">Wildlife Olympiad</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 text-left p-6 rounded-xl bg-white">
                <Award className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-1">2nd Runner-up</h3>
                  <p className="text-sm text-muted-foreground">Goethe-Institut Science Film Festival</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 text-left p-6 rounded-xl bg-white">
                <Award className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-1">Nationalist (13th) & District Champion</h3>
                  <p className="text-sm text-muted-foreground">45th National Science and Technology Week</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 text-left p-6 rounded-xl bg-white">
                <Award className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-1">District Champion</h3>
                  <p className="text-sm text-muted-foreground">46th National Science and Technology Week</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 text-left p-6 rounded-xl bg-white">
                <Award className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-1">Champion</h3>
                  <p className="text-sm text-muted-foreground">UIU CSC FEST (ICT Olympiad)</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 text-left p-6 rounded-xl bg-white">
                <Award className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-1">Nationalist</h3>
                  <p className="text-sm text-muted-foreground">International Earth Science Olympiad</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
