import LoginForm from "../../components/LoginForm";

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center w-[100vw] h-[100vh] bg-gray-800 font-dm">
      <section className="flex flex-col sm:flex-row sm:w-[75vw] md:w-[65vw] lg:w-[55vw] xl:w-[40vw] bg-gray-800 gap-[1rem] rounded-[.2rem] relative">
        <div className="flex sm:flex-col justify-center gap-8 items-center sm:pb-8 sm:w-[20rem] sm:h-[20rem] bg-[#475993] relative rounded-t-lg sm:rounded-t-none sm:rounded-l-lg">
          <div className="max-w-[4rem] sm:max-w-[14rem] py-2 flex-1 bg-cover overflow-hidden cursor-pointer">
            <img
              draggable="false"
              className="max-w-[4rem] sm:max-w-[14rem] sm:-translate-x-[10%] select-none"
              src="https://cdn.icon-icons.com/icons2/2415/PNG/512/facebook_original_logo_icon_146526.png"
              alt="Facebook Logo"
            />
          </div>
          <h3 className="text-[1.5rem] h-min text-center leading-none text-gray-200 font-bold sm:mt-4 select-none">
            Connect with Facebook
          </h3>
          <div className="absolute w-[3.5rem] h-[3.5rem] top-[100%] -translate-y-[40%] sm:w-[4.5rem] sm:h-[4.5rem] sm:top-0 sm:right-0 sm:translate-y-4 sm:translate-x-[60%] flex justify-center items-center text-xl text-gray-300 font-bold bg-gray-800 rounded-full">
            or
          </div>
        </div>
        <LoginForm />
      </section>
    </div>
  );
};

export default LoginPage;
