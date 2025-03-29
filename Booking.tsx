
import { Navbar } from "@/components/Navbar";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { BookingSummary } from "@/components/booking/BookingSummary";
import { BookingForm } from "@/components/booking/BookingForm";
import { BookingLoader } from "@/components/booking/BookingLoader";
import { BookingActions } from "@/components/booking/BookingActions";
import { useLessonData } from "@/hooks/useLessonData";
import { useBookingData } from "@/hooks/useBookingData";

const Booking = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  
  // Use our custom hooks to manage state
  const { 
    lessonTypes, 
    date, 
    timeSlot, 
    lessonType, 
    availableTimeSlots,
    handleDateChange, 
    handleLessonTypeChange,
    setTimeSlot 
  } = useLessonData();
  
  const {
    instructors,
    session,
    userProfile,
    isSubmitting,
    setIsSubmitting,
    loading
  } = useBookingData();

  const handleBooking = async () => {
    if (!session?.user?.id) {
      toast({
        title: "Authentication required",
        description: "Please log in to book a lesson.",
        variant: "destructive",
      });
      navigate("/auth");
      return;
    }

    if (!date || !timeSlot || !lessonType) {
      toast({
        title: "Missing information",
        description: "Please select a date, time slot, and lesson type.",
        variant: "destructive",
      });
      return;
    }

    if (!instructors || instructors.length === 0) {
      toast({
        title: "No instructors available",
        description: "No instructors are available at the moment. Please try again later.",
        variant: "destructive",
      });
      return;
    }

    // Check if user profile exists
    if (!userProfile) {
      toast({
        title: "Profile not found",
        description: "Your user profile is missing. Please log out and sign up again.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const randomInstructor = instructors[Math.floor(Math.random() * instructors.length)];
      const selectedLesson = lessonTypes.find(lt => lt.id === lessonType);
      
      const lessonDateTime = new Date(date);
      const [hours, minutes] = timeSlot.split(':');
      lessonDateTime.setHours(parseInt(hours), parseInt(minutes));

      // Type assertion for lesson_type to match the required enum type
      const lessonTypeValue = lessonType as "learners" | "beginner" | "intermediate" | "advanced";

      const { error } = await supabase
        .from("lessons")
        .insert({
          student_id: session.user.id,
          instructor_id: randomInstructor.id,
          lesson_date: lessonDateTime.toISOString(),
          lesson_type: lessonTypeValue,
          duration: selectedLesson?.duration || 60,
          status: "pending"
        });

      if (error) throw error;

      toast({
        title: "Success",
        description: "Your lesson has been booked successfully.",
      });

      navigate("/profile");
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
      console.error("Booking error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return <BookingLoader />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container py-8 px-4 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8">Book a Lesson</h1>
        
        <BookingSummary
          date={date}
          timeSlot={timeSlot}
          lessonType={lessonType}
          lessonTypes={lessonTypes}
        />

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <BookingForm
              date={date}
              lessonType={lessonType}
              timeSlot={timeSlot}
              availableTimeSlots={availableTimeSlots}
              onDateSelect={handleDateChange}
              onLessonTypeSelect={handleLessonTypeChange}
              onTimeSlotSelect={setTimeSlot}
              onBookingSubmit={handleBooking}
              isSubmitting={isSubmitting}
            />
          </div>
          
          <div>
            <BookingActions
              onBookingSubmit={handleBooking}
              isSubmitting={isSubmitting}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
