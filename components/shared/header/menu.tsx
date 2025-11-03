import Link from 'next/link'
import CartButton from './cart-button'
import UserButton from './user-button'

export default function Menu() {
  return (
    <div className="flex justify-end">
      <nav className="flex items-center gap-3 w-full mr-5">
        <Link href="/sign-in" className="flex items-center header-button">
          <UserButton />
        </Link>
         <CartButton />
      </nav>
    </div>
  )
}
