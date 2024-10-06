import { Circle, Clock } from "lucide-react";
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

const FlightDetailSidebar = ({firstFlight, secondFlight}:SingleFlightProps) => {
    return (
        <div>
            <p className="mt-20 mb-3 font-neueMontrealMedium">Flight details</p>
            <hr className="my-5" />
            <section className="flex flex-col items-start">
                <Circle height={15} width={15} color="black" className="my-[5px]" />
                <div className="h-14 w-[1.8px] bg-black relative left-1.5" />
                <Circle height={15} width={15} color="black" className="my-[5px]" />
                <div className="border-l-2 border-dashed border-gray-400 h-32 w-[1.8px] relative left-1.5" />
                <Circle height={15} width={15} color="black" className="my-[5px]" />
                <div className="h-14 w-[1.8px] bg-black relative left-1.5" />
                <Circle height={15} width={15} color="black" className="my-[5px]" />
            </section>
           {/* Left Texts */}
            <section className="h-full relative bottom-[339px] left-6">
                 {/* Top Text */}
                <div className="flex flex-col items-start">
                    <span className="text-slate-500">Sat 28 Sept • {firstFlight.departureTime.split("")[0]}</span>
                    <span className="text-medium font-bold text-black">DXB • Dubai International Airport</span>
                </div>
                <div className="flex flex-col items-start relative top-[33px]">
                    <span className="text-slate-500">Sat 28 Sept • {firstFlight.arrivalTime.split("")[0]}</span>
                    <span className="text-medium font-bold text-black">DXB • Dubai International Airport</span>
                </div>
                {/* Layover Text */}
                <div className="flex flex-row items-center gap-5 relative top-20 left-5">
                    <Clock color="#64748b" size={20} />
                    <p className="text-slate-500">Layover {firstFlight.duration}</p>
                </div>
                 {/* Bottom Text */}
                <div className="flex flex-col items-start relative top-[115px]">
                    <span className="text-slate-500">Sat 28 Sept • {secondFlight.departureTime.split("")[0]}</span>
                    <span className="text-medium font-bold text-black">RUH • King Khalid International Airport</span>
                </div>
                <div className="flex flex-col items-start relative top-[147px]">
                    <span className="text-slate-500">Sat 28 Sept • {secondFlight.arrivalTime.split("")[0]}</span>
                    <span className="text-medium font-bold text-black">CDG • Paris - Charles de Gaulle Airport</span>
                </div>
                {/* Right Texts */}
                <section className="relative h-fit w-full bottom-[180px] left-[375px] flex flex-row items-start gap-5">
                    <Image
                        src={firstFlight.imageUrl}
                        alt="image"
                        width={40}
                        height={40}
                    />
                    <div className="flex flex-col items-start text-slate-700">
                        <p>{firstFlight.airline} Airlines • SV553</p>
                        <p>Economy • A330</p>
                        <p>Flight time {firstFlight.duration}</p>
                    </div>
                </section>

                <section className="relative h-fit w-full bottom-[10px] left-[375px] flex flex-row items-start gap-5">
                    <Image
                        src={secondFlight.imageUrl}
                        alt="image"
                        width={40}
                        height={40}
                    />
                    <div className="flex flex-col items-start text-slate-700">
                        <p>{secondFlight.airline} Airlines • SV553</p>
                        <p>Economy • A330</p>
                        <p>Flight time {secondFlight.duration}</p>
                    </div>
                </section>
            </section>
        </div>
    );
}

export default FlightDetailSidebar;