export const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow m-4">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center">
          © 2023{" "}
          <a
            href="https://portfolio-andres-marino.web.app/"
            className="hover:font-bold duration-300"
            target="_blank"
            rel="noreferrer"
          >
            Andres Marino
          </a>{" "}
          - All rights reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0">
          <li>
            <a
              href="https://github.com/a-Marino/E-Commerce-CoderHouse"
              target="_blank"
              className="mr-4 hover:font-bold md:mr-6 duration-300"
              rel="noreferrer"
            >
              About
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:font-bold md:mr-6 duration-300">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:font-bold md:mr-6 duration-300">
              Licensing
            </a>
          </li>
          <li>
            <a href="#" className="hover:font-bold duration-300">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
