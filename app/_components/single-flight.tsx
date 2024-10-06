import { Button } from "@/components/ui/button";
import Image from "next/image";

interface Flight {
    airline: string;
    flightNumber: string;
    departureTime: string;
    arrivalTime: string;
    duration: string;
    stops: string;
    route: {
        from: string;
        to: string;
    };
    stopDetails?: string;
    imageUrl: string;
}

interface SingleFlightProps {
    firstFlight: Flight;
    secondFlight: Flight;
}

const SingleFlight = ({ firstFlight, secondFlight }: SingleFlightProps) => {
    return (
        <div className="mt-10 w-full flex flex-col items-center justify-start">
            <div className="w-full h-auto border-2 border-slate-300 rounded-lg flex flex-row">
                <section className="w-[80%] flex flex-col justify-between p-4 space-y-8">
                    {/* First Flight Details */}
                    <div className="flex flex-row items-center justify-between">
                        <div className="flex flex-row items-center gap-5 w-[50%]">
                            <Image src={firstFlight.imageUrl} alt="" width={50} height={50} />
                            <div className="flex flex-col items-start">
                                <p className="text-sm text-gray-600">{firstFlight.airline} • {firstFlight.flightNumber}</p>
                                <p className="font-semibold">
                                    {firstFlight.departureTime} - {firstFlight.arrivalTime}
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-row items-end justify-between w-[30%]">
                            <div className="flex flex-col items-start">
                                <p className="text-sm text-gray-600">{firstFlight.route.from} - {firstFlight.route.to}</p>
                                <p className="font-semibold">{firstFlight.duration}</p>
                            </div>
                            <div className="flex flex-col items-start">
                                {firstFlight.stopDetails && <p className="text-sm text-gray-600">{secondFlight.stopDetails}</p>}
                                <p className="text-sm text-black">{secondFlight.stops}</p>
                            </div>
                        </div>
                    </div>

                    {/* Second Flight Details */}
                    <div className="flex flex-row items-center justify-between">
                        <div className="flex flex-row items-center gap-5 w-[50%]">
                            <Image src={secondFlight.imageUrl} alt="" width={50} height={50} />
                            <div className="flex flex-col items-start">
                                <p className="text-sm text-gray-600">{secondFlight.airline} • {secondFlight.flightNumber}</p>
                                <p className="font-semibold flex flex-row items-start gap-1">
                                    <span>
                                    {secondFlight.departureTime} - {secondFlight.arrivalTime}
                                    </span>
                                    <span className="text-red-800 text-xs font-neueMontrealMedium">+1 day</span>
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-row items-center justify-between w-[30%]">
                            <div className="flex flex-col items-start">
                                <p className="text-sm text-gray-600">{secondFlight.route.from} - {secondFlight.route.to}</p>
                                <p className="font-semibold">{secondFlight.duration}</p>
                            </div>
                            <div className="flex flex-col items-start">
                                {secondFlight.stopDetails && <p className="text-sm text-gray-600">{secondFlight.stopDetails}</p>}
                                <p className="text-sm text-black">{secondFlight.stops}</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Price and Select Section */}
                <div className="bg-slate-300 w-[2px]"/>                <section className="flex flex-col items-start justify-end w-[20%] ml-2 p-3">
                    <p className="text-sm text-gray-600">from</p>
                    <p className="text-lg font-bold">AED 2,456.90</p>
                    <Button variant="default" className="w-full mt-3">Select</Button>
                </section>
            </div>
        </div>
    );
}

export default SingleFlight;
