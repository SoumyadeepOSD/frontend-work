import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { flightData } from "../_constant/flight-data/flightdata";
import SingleFlight from "./single-flight";
import FlightDetailSidebar from "./flight-details-sidebar";

const FlightList = () => {
    return (
        <div className="h-full w-full mt-10 bg-purple-30 px-[250px]">
            
            <h1>Showing 356 of 767 results</h1>
            <div className="overflow-y-scroll h-full w-full">
                {
                    flightData[0].flights.map(item => {
                        return (
                            <Sheet key={item.id}>
                                <SheetTrigger className="w-full">
                                    <SingleFlight 
                                        firstFlight={item.firstFlight} 
                                        secondFlight={item.secondFlight} 
                                    />
                                </SheetTrigger>
                                <SheetContent
                                    side="right"
                                    closeIconPosition="left"
                                    className="my-5 rounded-s-xl h-[95%] absolute" // Removed w-[500px]
                                >
                                    <FlightDetailSidebar  
                                        firstFlight={item.firstFlight} 
                                        secondFlight={item.secondFlight}
                                    />
                                </SheetContent>
                            </Sheet>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default FlightList;
