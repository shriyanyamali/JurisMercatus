'use client';

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Home, Search, ArrowLeft, HelpCircle } from "lucide-react";
import Link from "next/link";

export default function NotFoundUI() {
  const router = useRouter();

  return (
    <div className="pt-40 bg-gradient-to-br flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center space-y-10">
        <div className="relative">
          <div className="text-8xl md:text-9xl font-bold text-gray-900 select-none">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg transform -rotate-12">
              <div className="text-4xl md:text-5xl">😵</div>
            </div>
          </div>
        </div>

        {/* Main heading */}
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Page Not Found
          </h1>
          <p className="text-lg text-gray-600 max-w-md mx-auto">
            The page you are looking for doesn't exist. Please check the URL for
            any errors, or use the navigation menu to find what you're looking
            for.
          </p>
        </div>

        <div className="flex justify-center space-x-4 my-8">
          <div className="w-16 h-16 bg-pink-200 rounded-full flex items-center justify-center transform rotate-12 shadow-md">
            <HelpCircle className="w-8 h-8 text-pink-600" />
          </div>
          <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center transform -rotate-6 shadow-md">
            <div className="w-3 h-3 bg-green-600 rounded-full"></div>
          </div>
          <div className="w-14 h-14 bg-purple-200 rounded-full flex items-center justify-center transform rotate-45 shadow-md">
            <div className="w-4 h-4 bg-purple-600 rounded-full"></div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            asChild
            size="lg"
            className="bg-[#3094FF] hover:bg-[#3080FF] rounded-full px-8"
          >
            <Link href="/">
              <Home className="w-5 h-5 mr-2" />
              Go Home
            </Link>
          </Button>
          <Button
            onClick={() => router.back()}
            variant="outline"
            size="lg"
            className="rounded-full px-8 bg-transparent border-2"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Go Back
          </Button>
        </div>

        <div className="pt-8">
          <p className="text-sm text-gray-400">
            If you believe error message is a mistake, please{" "}
            <Link href="mailto:yamalishriyan@gmail.com" className="underline">
              contact us
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}