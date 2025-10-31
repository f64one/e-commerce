import { ShoppingCartIcon, UserIcon } from 'lucide-react'
import Link from 'next/link'

export default function Menu() {
  return (
    <div className="flex justify-end">
      <nav className="flex items-center gap-3 w-full">
        <Link href="/cart" className="header-button">
          <UserIcon className="h-7 w-7 text-center mx-auto" />
          <span className="font-bold text-sm">Sign in</span>
        </Link>

        <Link href="/cart" className="header-button">
          <ShoppingCartIcon className="h-7 w-7 text-center mx-auto" />
          <span className="font-bold text-sm">Cart</span>
        </Link>
      </nav>
    </div>
  )
}
