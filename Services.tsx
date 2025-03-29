
import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Calendar, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const servicesData = [
  {
    title: "In-Person Classes",
    description: "Expert instruction from our qualified teachers in a classroom setting. Our experienced instructors provide comprehensive training to ensure you're well-prepared for your tests.",
    icon: GraduationCap,
  },
  {
    title: "Learners License Booking",
    description: "Free assistance with booking your learners license test date. We'll help you navigate the booking process and ensure you get a suitable test date.",
    icon: Calendar,
  },
  {
    title: "Drivers License Booking",
    description: "Free assistance with booking your drivers license test date. Our team will help you secure a test date and prepare you for success.",
    icon: Clock,
  },
];

const licenseCodesData = [
  {
    code: "Code B",
    price: "R2000",
    deposit: "R850",
    description: "Light motor vehicles up to 3500kg",
  },
  {
    code: "Code C1",
    price: "R1500",
    deposit: "R500",
    description: "Heavy motor vehicles between 3500kg and 16000kg",
  },
  {
    code: "Code EC",
    price: "R3500",
    deposit: "R1000",
    description: "Extra heavy motor vehicles over 16000kg",
  },
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container py-16">
        <h1 className="text-4xl font-bold text-primary mb-12 text-center">Our Services</h1>
        
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Khumalos Driving School?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            With years of experience and a commitment to excellence, we provide comprehensive driving education
            that ensures our students are well-prepared for both their tests and real-world driving situations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {servicesData.map((service) => (
            <Card key={service.title} className="hover:shadow-lg transition-shadow flex flex-col">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <service.icon className="w-6 h-6 text-secondary" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col flex-1">
                <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                <Button 
                  className="w-full mt-auto"
                  onClick={() => navigate("/booking")}
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <h2 className="text-3xl font-bold text-primary mb-8 text-center">License Codes & Pricing</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {licenseCodesData.map((item) => (
            <Card key={item.code} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl">{item.code}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="space-y-2">
                  <p className="text-2xl font-bold text-primary">{item.price}</p>
                  <p className="text-sm text-gray-500">Deposit: {item.deposit}</p>
                  <Button 
                    className="w-full mt-4"
                    onClick={() => navigate("/booking")}
                  >
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
