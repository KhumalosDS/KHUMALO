import { Navbar } from "@/components/Navbar";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container py-16">
        <h1 className="text-4xl font-bold text-primary mb-8">About Khumalos Driving School</h1>
        <div className="prose prose-lg max-w-none">
          <p className="mb-6">
            Khumalos Driving School has been committed to providing quality driving instruction to learners across South Africa. Our experienced instructors are dedicated to helping you become a confident and safe driver.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
          <p className="mb-6">
            To provide comprehensive driving education that empowers learners with the skills and confidence needed to become responsible drivers, while making the journey to obtaining your driver's license both affordable and achievable in the shortest possible time without compromising on quality.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Instructors</h2>
          <p className="mb-6">
            All our instructors are certified professionals with years of experience in driver education. They are patient, knowledgeable, and committed to your success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;