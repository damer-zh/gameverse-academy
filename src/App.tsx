import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Lessons from "./pages/Lessons";
import Assignments from "./pages/Assignments";
import Community from "./pages/Community";
import Profile from "./pages/Profile";
import TeacherDashboard from "./pages/TeacherDashboard";
import LessonDetail from "./pages/LessonDetail";
import AssignmentDetail from "./pages/AssignmentDetail";
import CommunityQuestion from "./pages/CommunityQuestion";
import CourseDetail from "./pages/CourseDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/course/:courseId" element={<CourseDetail />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/lesson/:lessonId" element={<LessonDetail />} />
          <Route path="/assignments" element={<Assignments />} />
          <Route path="/assignment/:assignmentId" element={<AssignmentDetail />} />
          <Route path="/community" element={<Community />} />
          <Route path="/community/question/:questionId" element={<CommunityQuestion />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/teacher" element={<TeacherDashboard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
