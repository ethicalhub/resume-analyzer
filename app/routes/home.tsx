import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import ResumeCard from "~/components/ResumeCard";
import { resumes } from "../../constants";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { usePuterStore } from "~/lib/puter";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Resume Analyzer" },
  ];
}

export default function Home() {
      const { auth} = usePuterStore()
    const location = useLocation()
    const next = location.search.split('next=')[1];
    const navigate = useNavigate()

    useEffect(()=>{
        if(!auth.isAuthenticated) navigate('/auth?next=/')
    },[auth.isAuthenticated])
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar />
    <section className="main-section">
      <div className="page-heading py-20">
        <h1>Track your Applications & Resume Ratings</h1>
        <h2>Review your submissions and check AI-powered feedback.</h2>
      </div>
    {
      resumes.length > 0 &&  (
        <div className="resumes-section"> {
          resumes.map((resume : Resume)=>(
          <ResumeCard key={resume.id} resume={resume} />
        ))}
      </div>)
    }
    </section>
  </main>;
}
