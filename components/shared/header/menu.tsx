import { UserIcon } from 'lucide-react'
import Link from 'next/link'
import CartButton from './cart-button'

export default function Menu() {
  return (
    <div className="flex justify-end">
      <nav className="flex items-center gap-3 w-full">
        <Link href="/cart" className="header-button">
          <UserIcon className="h-7 w-7 text-center mx-auto" />
          <span className="font-bold text-sm">Sign in</span>
        </Link>

        <nav className="flex gap-3 w-full">
          <CartButton />
        </nav>
      </nav>
    </div>
  )
}
