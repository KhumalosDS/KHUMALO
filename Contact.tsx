
import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, Mail, Facebook, Video, MessageSquare, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container py-16">
        <h1 className="text-4xl font-bold text-primary mb-12 text-center">Contact Us</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <MapPin className="w-6 h-6 text-secondary" />
                <CardTitle>Location</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                8003 Khumalo Street<br />
                Opposite Tokoza Police Station<br />
                Tokoza, 1426
              </p>
              <a 
                href="https://www.google.com/maps/place/8003+Mavuso+St,+Thokoza,+1426/@-26.3289389,28.141271,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-600 mt-2 hover:text-blue-800"
              >
                <MapPin className="w-4 h-4" />
                <span>View on Google Maps</span>
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Clock className="w-6 h-6 text-secondary" />
                <CardTitle>Trading Hours</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-gray-600">
                <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p>Saturday: 8:00 AM - 4:00 PM</p>
                <p>Sunday: 8:00 AM - 12:00 PM</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Mail className="w-6 h-6 text-secondary" />
                <CardTitle>Contact Details</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-gray-600">
                  Email: info@khumalosdrivingshool.co.za
                </p>
                <div className="flex items-center gap-2 text-gray-600">
                  <Phone className="w-5 h-5" />
                  <span>+27 68 784 6921</span>
                </div>
                <a 
                  href="https://wa.me/27763027027" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 hover:text-green-600"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>+27 76 302 7027</span>
                </a>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Social Media</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4">
                <a 
                  href="https://www.facebook.com/Khumalosds" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
                >
                  <Facebook className="w-5 h-5" />
                  <span>Khumalo's Driving School</span>
                </a>
                <a 
                  href="https://www.tiktok.com/@khumalosdrivingschool" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 hover:text-pink-600"
                >
                  <Video className="w-5 h-5" />
                  <span>@khumalosdrivingschool</span>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
