import { BiLeftArrowAlt } from "react-icons/bi";
import { Link } from "react-router";
import ThemeBtn from "../components/common/ThemeBtn";

export default function Login() {
  return (
    <>
      <section className="min-h-screen bg-gray-50 dark:bg-[#070d17]">
        <div className="mx-auto flex min-h-screen max-w-xl flex-col justify-center px-6 py-8">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-[#387ed1]">Zerodha</h1>

            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Start your investing journey
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-[#0d1522]">
            <div className="flex px-6 pt-6 justify-between">
              <Link to={"/"}>
                <BiLeftArrowAlt className="text-3xl hover:cursor-pointer  transition-transform duration-300 ease-in-out hover:scale-105   dark:text-white" />
              </Link>
              <ThemeBtn />
            </div>
            <div className="p-6 sm:p-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Create your account
              </h2>

              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Enter your details to get started.
              </p>

              <form className="mt-6 space-y-4">
                <div>
                  <label
                    htmlFor="username"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-200"
                  >
                    Username
                  </label>

                  <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Choose a username"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 outline-none transition focus:border-[#387ed1] focus:ring-1 focus:ring-[#387ed1] dark:border-gray-700 dark:bg-[#111c2b] dark:text-white dark:placeholder-gray-500"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-200"
                  >
                    Email
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 outline-none transition focus:border-[#387ed1] focus:ring-1 focus:ring-[#387ed1] dark:border-gray-700 dark:bg-[#111c2b] dark:text-white dark:placeholder-gray-500"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-200"
                  >
                    Password
                  </label>

                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="••••••••"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 outline-none transition focus:border-[#387ed1] focus:ring-1 focus:ring-[#387ed1] dark:border-gray-700 dark:bg-[#111c2b] dark:text-white dark:placeholder-gray-500"
                    required
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    id="terms"
                    type="checkbox"
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-[#387ed1] focus:ring-[#387ed1]"
                    required
                  />

                  <label
                    htmlFor="terms"
                    className="text-sm text-gray-500 dark:text-gray-400"
                  >
                    I agree to the{" "}
                    <a
                      href="#"
                      className="font-medium text-[#387ed1] hover:underline"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-[#387ed1] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#2f6fb9] focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
                >
                  Create account
                </button>
              </form>

              <p className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  to={"login"}
                  className="font-medium text-[#387ed1] hover:underline"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>

          <p className="mt-6 text-center text-xs text-gray-400">
            This is a learning project inspired by Zerodha.
          </p>
        </div>
      </section>
    </>
  );
}
