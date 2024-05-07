import { Button } from "@/components/ui/button"

export function ProductHeader() {
  return (
    <header className="flex items-center justify-between h-16 px-4 bg-gray-900 text-white shadow-md">
      <div className="flex items-center">
        <Button className="rounded-full" size="icon" variant="ghost">
          <ArrowLeftIcon className="h-5 w-5" />
          <span className="sr-only">Go back</span>
        </Button>
        <h1 className="text-lg font-medium ml-4">Page Title</h1>
      </div>
      <div className="flex items-center gap-2" />
    </header>
  )
}

function ArrowLeftIcon(props: any) {
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
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  )
}
