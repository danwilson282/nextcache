import AuthButtons from "../components/AuthButtons";
import Link from "next/link";
export default function AppBar() {

  return (
    <>
    <div className="px-2">
        <Link href="/" className="text-blue-600 hover:underline px-2">
            Home
        </Link>
    </div>
    <div className="px-2">
    <Link href="/uncached" className="text-blue-600 hover:underline px-2">
          /uncached
        </Link>
    </div>
    <div className="px-2">
    <Link href="/cached" className="text-blue-600 hover:underline px-2">
          /cached
        </Link>
    </div>
    <div className="px-2">
    <Link href="/cached/listed" className="text-blue-600 hover:underline px-2">
          /cached/listed
        </Link>
    </div>
    <div className="px-2">
    <Link href="/cached/unlisted" className="text-blue-600 hover:underline px-2">
          /cached/unlisted
        </Link>
    </div>
    <div className="px-2">
    <Link href="/static" className="text-blue-600 hover:underline px-2">
          /static
        </Link>
    </div>
    <div className="px-2">

    <Link href="/dynamic" className="text-blue-600 hover:underline px-2">
          /dynamic
        </Link>
    </div>
    <AuthButtons/>
    </>
  )
}