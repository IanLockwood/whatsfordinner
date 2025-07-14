import WeatherWidget from "components/WeatherWidget/WeatherWidget";

export default function ExperimentsWrapper() {
  return (
    <div>
        <div>
            <h1 className="text-3xl font-bold text-center my-8">Experiments</h1>
            <div className="
                grid
                grid-rows-[20px_1fr_20px]
                p-8
                pb-0
                gap-16
            ">
                <main className="flex flex-col row-start-1 items-center w-full w-max-[1200px]">
                  <div className="w-full max-w-[1200px] rounded-lg shadow-md p-6">
                    <p>Try something out!</p>
                  </div>
                </main>
            </div>
        </div>
    </div>
  );
}