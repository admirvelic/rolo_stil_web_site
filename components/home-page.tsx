import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"
import Link from "next/link"

export function HomePage() {
  return (
    <>
      <div className="relative w-full h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent" />
        <div className="container px-4 md:px-6 flex flex-col items-center justify-center text-center space-y-6">
          <h1 className="text-4xl font-bold tracking-tight">Elevate Your Space</h1>
          <p className="text-gray-500 dark:text-gray-400 max-w-md">
            At our company, we believe that the doors and windows you choose can transform the entire look and feel of
            your home. Our high-quality products are designed to not only enhance the aesthetic but also improve energy
            efficiency and security.
          </p>
          <Button>Contact Us</Button>
        </div>
      </div>
      <div className="container px-4 md:px-6 py-12 md:py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="h-full">
            <CardContent className="grid md:grid-cols-2 gap-6 items-center justify-center">
              <div>
                <img
                  alt="Door"
                  className="rounded-lg"
                  height={300}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "450/300",
                    objectFit: "cover",
                  }}
                  width={450}
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Classic Doors</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Elevate the look and feel of your home with our high-quality classic doors. Designed to enhance both
                  aesthetics and energy efficiency, these doors will transform your space.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="h-full">
            <CardContent className="grid md:grid-cols-2 gap-6 items-center justify-center">
              <div>
                <img
                  alt="Window"
                  className="rounded-lg"
                  height={300}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "450/300",
                    objectFit: "cover",
                  }}
                  width={450}
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Modern Windows</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Elevate the look and feel of your home with our high-quality modern windows. Designed to enhance both
                  aesthetics and energy efficiency, these windows will transform your space.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="h-full">
            <CardContent className="grid md:grid-cols-2 gap-6 items-center justify-center">
              <div>
                <img
                  alt="Patio Door"
                  className="rounded-lg"
                  height={300}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "450/300",
                    objectFit: "cover",
                  }}
                  width={450}
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Patio Doors</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Elevate the look and feel of your home with our high-quality patio doors. Designed to enhance both
                  aesthetics and energy efficiency, these doors will transform your space.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <footer className="w-full bg-gray-100 dark:bg-gray-800 py-6">
        <div className="container px-4 md:px-6 flex items-center justify-between">
          <p className="text-gray-500 dark:text-gray-400">© 2024 Your Company. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            <Link aria-label="Instagram" href="#">
              <InstagramIcon className="w-6 h-6 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300" />
            </Link>
            <Link aria-label="Facebook" href="#">
              <FacebookIcon className="w-6 h-6 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300" />
            </Link>
          </div>
        </div>
      </footer>
    </>
  )
}

function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}
