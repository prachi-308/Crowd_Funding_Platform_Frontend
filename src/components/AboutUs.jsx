import React from 'react';
import { motion } from 'framer-motion';
import { Medal, Users, Globe, Target } from 'lucide-react';

const AboutUs = () => {
  const stats = [
    { id: 1, number: "10+", label: "Projects Completed", icon: Target },
    { id: 2, number: "1000+", label: "Lives Impacted", icon: Users },
    { id: 3, number: "20+", label: "Partner Organizations", icon: Globe },
    { id: 4, number: "2+", label: "Years of Service", icon: Medal }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
            
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-gray-900">
              About Rotaract IIITM
            </h2>
            <div className="w-20 h-1 bg-blue-600" />
            <p className="text-xl font-semibold text-blue-600">
              You Bestow, We Deliver
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Rotaract IIITM is a dynamic community of young leaders and innovators 
              dedicated to creating positive change. As part of the global Rotary 
              International family, we focus on developing leadership skills while 
              discovering the power of Service Above Self.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our mission is to empower communities through innovative solutions 
              and dedicated service. We believe in the power of youth to transform 
              society and create lasting impact through sustainable initiatives.
            </p>
            <div className="flex gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg cursor-pointer"
              >
                Join Our Team
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg cursor-pointer"
              >
                Learn More
              </motion.div>
            </div>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <img 
                src="https://www.themanthanschool.co.in/blog/wp-content/uploads/2020/05/community-service.jpg" 
                alt="Community Service" 
                className="rounded-lg shadow-lg object-cover h-48 w-full"
              />
              <img 
                src="https://www.outdoorsgroup.co.uk/wp-content/uploads/outdoor-team-building-e1549278988197.jpg" 
                alt="Team Building" 
                className="rounded-lg shadow-lg object-cover h-64 w-full"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img 
                src="https://www.leadershipchoice.com/wp-content/uploads/2024/02/proving-leadership-training-is-worth-it-980x504-1.jpg" 
                alt="Leadership Workshop" 
                className="rounded-lg shadow-lg object-cover h-64 w-full"
              />
              <img 
                src="https://kadalys.com/cdn/shop/files/impact_social_banniere_2ffd62a2-adcd-4ef6-8787-687357511bf7.jpg?v=1697449415&width=2000" 
                alt="Social Impact" 
                className="rounded-lg shadow-lg object-cover h-48 w-full"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.id}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6 rounded-lg bg-gray-50"
                >
                  <IconComponent className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                  <h3 className="text-4xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-gray-600">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <h4 className="text-xl font-semibold mb-4">Innovation</h4>
              <p className="text-gray-600">
                We believe in finding creative solutions to community challenges through 
                modern approaches and technology.
              </p>
            </div>
            <div className="text-center p-6">
              <h4 className="text-xl font-semibold mb-4">Leadership</h4>
              <p className="text-gray-600">
                Developing the next generation of leaders who are committed to 
                positive social change.
              </p>
            </div>
            <div className="text-center p-6">
              <h4 className="text-xl font-semibold mb-4">Community Service</h4>
              <p className="text-gray-600">
                Dedicated to making a lasting impact in our communities through 
                sustainable service projects.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;