import { usePuterStore } from "~/lib/puter";
import type { Route } from "./+types/home";
import { useLocation, useNavigate } from "react-router";
import { useEffect } from "react";

type Props = {}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Auth | Resumind" },
    { name: "description", content: "Signin to Resumeind" },
  ];
}


const Auth = (props: Props) => {
    const {isLoading, auth} = usePuterStore()
    const location = useLocation()
    const next = location.search.split('next=')[1];
    const navigate = useNavigate()

    useEffect(()=>{
        if(auth.isAuthenticated) navigate(next)
    },[auth.isAuthenticated])

  return (
    <div className="bg-[url('/images/bg-main.svg')]  bg-cover min-h-screen flex items-center justify-center">
        <div className="gradient-border shadow-lg">
            <section className="flex flex-col gap-8 bg-white rounded-2xl p-10">
                <div className="flex flex-col items-center gap-2 text-center">
                    <h1> Welcome</h1>
                    <h2> Login to continue your journey... </h2>
                </div>
                <div>
                    {
                        isLoading? (
                            <button className="auth-button animate-pulse">
                                Signing you in...
                            </button>
                        ) : (
                            <>
                            {
                                auth.isAuthenticated 
                                ? <button className="auth-button" onClick={auth.signOut}> Logout </button>
                                : <button className="auth-button" onClick={auth.signIn}> Login </button>
                            }
                            </>
                        )

                    }
                </div>
            </section>
        </div>
    </div>
  )
}

export default Auth