
function IntroductionImage() {
  return (
    <figure className="flex flex-col grow text-sm leading-6 text-zinc-500 max-md:mt-10 max-md:max-w-full">
      <img 
        loading="lazy" 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c1e8f3126ffd3183cf3099990a4346de67326c1b76c3eb6bf46ce75e5749d62b?placeholderIfAbsent=true&apiKey=8390c896bcb7435f9438ea31eaafd63c" 
        className="object-contain w-full aspect-[1.47] max-md:max-w-full" 
        alt="Imagine the impact when everyone gets the right tool for the job, with perfect integration."
      />
      <figcaption className="mt-1.5 ml-8  max-md:ml-2.5">
        Imagine the impact when everyone gets the right tool for the job, with perfect integration.
      </figcaption>
    </figure>
  );
}

export default IntroductionImage;