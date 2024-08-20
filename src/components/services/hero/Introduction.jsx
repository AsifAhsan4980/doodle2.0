import ContactButton from "./ContactButton";
import IntroductionImage from "./IntroductionImage";
import IntroductionText from "./IntroductionText";

function Introduction() {
  return (
    <section className="py-24 w-full rounded-none bg-neutral-100 max-md:pl-5 max-md:max-w-full">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1">
          <div className="flex flex-col max-md:ml-0 max-md:w-full">
            <IntroductionText />
            <ContactButton />
          </div>
          <div className="flex flex-col max-md:ml-0 max-md:w-full">
            <IntroductionImage />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Introduction;
