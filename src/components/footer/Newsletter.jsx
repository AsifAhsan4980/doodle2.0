import React from 'react';

const Newsletter = () => {
  return (
    <section className="flex flex-col justify-center items-center px-20 py-16 w-full bg-slate-50 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col w-full max-w-[1570px] max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between w-full max-md:max-w-full">
          <div className="text-2xl font-semibold leading-6 text-zinc-800">
            Join our newsletter
            <br />
            <span className="text-lg font-medium leading-8">
              We'll send you latter once in a week, No Spam.
            </span>
          </div>
          <form className="flex gap-5 my-auto text-base text-center">
            <label htmlFor="email" className="sr-only">Enter Your Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter Your Email"
              className="px-6 py-3 bg-gray-200 rounded-md border border-solid border-stone-300 text-neutral-400 max-md:px-5"
            />
            <button
              type="submit"
              className="px-6 py-3 font-semibold text-white whitespace-nowrap bg-orange-500 rounded-md max-md:px-5"
            >
              Submit
            </button>
          </form>
        </div>
        <hr className="shrink-0 mt-16 h-px border border-solid border-zinc-300 max-md:mt-10 max-md:max-w-full" />
      </div>
    </section>
  );
};

export default Newsletter;