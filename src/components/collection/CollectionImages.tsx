import GridCollections from "./GridCollections";

const CollectionImages = () => {
  return (
    <section className="flex flex-col items-center justify-center py-12 ">
      <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-10">
        Collect<span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-400 dark:from-gray-200 dark:to-gray-500">
          ions
        </span>
      </h2>
      <GridCollections />
    </section>
  );
};

export default CollectionImages;
