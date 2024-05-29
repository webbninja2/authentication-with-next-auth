import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';

function Header() {
  const { data: session } = useSession();
  const router = useRouter()
  const SignOutHandler =()=>{
      signOut()
      router.push("/auth")
  }

  return (
    <header className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold">MyApp</h1>
            </div>
          </div>
          <div>
            {session ? (
              <div className="flex items-center space-x-4">
                <div>
                  <p className="text-sm">Signed in as</p>
                  <p className="font-bold">{session.user.email}</p>
                </div>
                <button
                  onClick={() => SignOutHandler()}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div>
                <p className="text-sm">Not signed in</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
